<template lang="pug">
.container
  .title.is-size-4 {{ selected.id ? 'Редактировать' : 'Новый сервер' }}
  form.box(
    @submit.prevent="saveChanges"
  )
    template(v-if="selected.id")
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
        v-if="selected.id"
        ref="button-delete"
        type="is-danger"
        icon-left="delete"
        :loading="isLoadingDelete"
        @click.native="confirmDelete()"
      ) Удалить
      b-button(
        ref="button-ed"
        type="is-success"
        :loading="isLoadingChanges"
        :disabled="isCheckStatusButton"
        @click.native="saveChanges(selected.id ? 'edit' : 'add')"
      ) {{ selected.id ? 'Сохранить изменения' : 'Добавить сервер' }}
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
      isLoadingChanges: false,
      isLoadingDelete: false,
      local: {
        id: '',
        serverName: '',
        serverType: ''
      }
    }
  },
  methods: {
    ...mapActions('server', [
      'EDIT_SERVER',
      'ADD_SERVER',
      'DELETE_SERVER'
    ]),
    async saveChanges (action) {
      if (this.isCheckStatusButton) return

      this.isLoadingChanges = true

      action === 'edit'
        ? await this.EDIT_SERVER(this.local)
        : await this.ADD_SERVER({ serverName: this.local.serverName, serverType: this.local.serverType })

      this.isLoadingChanges = false
    },
    confirmDelete () {
      this.$buefy.dialog.confirm({
        message: `Удалить сервер с названием <strong>${this.local.serverName}</strong>?`,
        cancelText: 'Отмена',
        confirmText: 'Удалить',
        type: 'is-danger',
        onConfirm: async () => { await this.deleteServer() }
      })
    },
    async deleteServer () {
      this.isLoadingDelete = true
      await this.DELETE_SERVER(this.local.id)
      this.isLoadingDelete = false
    }
  },
  computed: {
    isCheckStatusButton () {
      /**
       * Чтобы кнопка сохранения изменений стала активной,
       * поля в форме должны быть не пустыми
       * и отличаться от уже установленных значений
       */
      if (this.local.serverName.length < 3) return true

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
  padding: 20px 10px 110px
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
