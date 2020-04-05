<template lang="pug">
.container
  .title.is-size-4 Редактировать
  form.box(
    @submit.prevent="saveChanges"
  )
    p
      strong ID:
      |  {{ selected.id }}

    .divider

    b-field(label="Название сервера")
      b-input(
        v-model.trim="local.serverName"
        expanded
        required
      )
    b-field.input-margin(label="Тип сервера")
      b-select(
        v-model.trim='local.serverType'
        expanded
      )
        option(
          v-for="option in ['dedicated', 'vds', 'hosting']"
          :key="option"
          :value="option"
        ) {{ option }}

    b-button.is-pulled-right.button-custom(
      type="is-success"
      :loading="isLoading"
      :disabled="isCheckStatusButton"
      @click="saveChanges()"
    ) Сохранить изменения
</template>

<script>
import methods from '@/services/api/methods'

export default {
  name: 'serverForm',
  props: {
    selected: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isLoading: false,
      local: {
        id: '',
        serverName: '',
        serverType: ''
      }
    }
  },
  methods: {
    async saveChanges () {
      if (this.isCheckStatusButton) return

      this.isLoading = true

      try {
        const request = await methods.patchData('server', this.local)

        if (request.status === 200) {
          this.$emit('changeServer', this.local)
          this.msgAfterServerReq('Изменения сохранены')
        }
      } catch (e) {
        console.error(e)
      } finally {
        this.isLoading = false
      }
    }
  },
  computed: {
    isCheckStatusButton () {
      /**
       * Чтобы кнопка сохранения изменений стала активной,
       * поля в форме должны быть не пустыми
       * и отличаться от уже установленных значений
       */
      const checkEmpty = Object.values(this.local).filter(i => i)
      if (checkEmpty.length < 3) return true

      const checkDifValue = Object.keys(this.local).some(v =>
        this.local[v] !== this.selected[v]
      )
      return !checkDifValue
    }
  },
  watch: {
    selected: {
      handler () {
        /**
         * Чтобы не менять props напрямую,
         * перезаписываем значения в $data.local
         */
        Object.keys(this.local).forEach(i => {
          this.local[i] = this.selected[i]
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="sass" scoped>
.input-margin
  margin-top: 15px

form.box
  border: 1px solid $color-alt
  border-radius: 8px
  padding: 20px 10px 70px
  box-shadow: none
  @media (min-width: $display-bp-mobile)
    padding: 20px 20px 70px

  .divider
    border-bottom: 1px solid $color-alt
    margin: 15px -10px
    @media (min-width: $display-bp-mobile)
      margin: 15px -20px

  .button-custom
    margin-top: 15px
</style>

<style lang="sass">
input.input
  box-shadow: none
</style>
