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

    .buttons.is-pulled-right.button-custom
      b-button(
        type="is-danger"
        icon-left="delete"
        @click="confirmDelete()"
      ) Удалить
      b-button(
        type="is-success"
        :loading="isLoading"
        :disabled="isCheckStatusButton"
        @click="saveChanges()"
      ) Сохранить изменения
</template>

<script>
import { mapActions } from 'vuex'

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
    ...mapActions('server', [
      'EDIT_SERVER'
    ]),
    async saveChanges () {
      if (this.isCheckStatusButton) return

      this.isLoading = true
      await this.EDIT_SERVER(this.local)
      this.isLoading = false
    },
    confirmDelete () {
      this.$buefy.dialog.confirm({
        message: `Удалить сервер с названием <strong>${this.local.serverName}</strong>?`,
        cancelText: 'Отмена',
        confirmText: 'Удалить',
        type: 'is-danger',
        onConfirm: () => this.$buefy.toast.open('Удалён')
      })
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
        this.local = Object.assign({}, this.selected)
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
