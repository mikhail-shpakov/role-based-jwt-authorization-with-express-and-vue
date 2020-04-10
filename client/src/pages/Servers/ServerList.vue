<template lang="pug">
.container
  p.title.is-size-4 Список серверов
  p.subtitle {{ subtitleText }}

  a(
    v-if="role === 'admin'"
    @click="addServer()"
  ) Добавить сервер
  .table-box
    b-table(
      :data="serverList"
      :columns="columns"
      :loading="isLoading"
      :selected.sync="selected"
      hoverable
      striped
    )
      template(slot='footer')
        .has-text-right Серверов всего: {{ serverList.length }}

      template(slot='empty')
          section.section
            .content.has-text-grey.has-text-centered
              p
                b-icon(
                  icon='emoticon-sad'
                  size='is-large'
                )
              p Список серверов пуст
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'serverList',
  data () {
    return {
      isLoading: true,
      selected: {},
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '60'
        },
        {
          field: 'serverName',
          label: 'Название сервера'
        },
        {
          field: 'serverType',
          label: 'Тип сервера'
        }
      ]
    }
  },
  computed: {
    ...mapState('server', {
      serverList: state => state.serverList
    }),
    ...mapState('user', {
      role: state => Object.keys(state.userInfo).length ? state.userInfo.permissions[0] : 'user'
    }),
    subtitleText () {
      return this.role === 'admin'
        ? 'Нажмите на любой сервер, чтобы начать редактирование и Esc, чтобы выйти из режима редактирования'
        : 'Пользователь может только просматривать список серверов'
    }
  },
  methods: {
    ...mapActions('server', [
      'GET_SERVER_LIST'
    ]),
    async fetchServerList () {
      await this.GET_SERVER_LIST()
      this.isLoading = false
    },
    addListenerEsc (e) {
      if (e.code === 'Escape') this.selected = {}
    },
    addServer () {
      const emptyData = {
        id: 0,
        serverName: '',
        serverType: 'dedicated'
      }
      this.$emit('selectServer', emptyData)
    }
  },
  watch: {
    selected () {
      if (this.role === 'admin') {
        this.$emit('selectServer', this.selected)
      }
    },
    serverList: {
      handler () {
        this.selected = {}
      },
      deep: true
    }
  },
  async mounted () {
    await this.fetchServerList()
    document.addEventListener('keyup', e => this.addListenerEsc(e))
  },
  beforeDestroy () {
    document.removeEventListener('keyup', e => this.addListenerEsc(e))
  }
}
</script>

<style lang="sass" scoped>
div.table-box
  border: 1px solid $color-alt
  border-radius: 8px
  margin-top: 10px
  padding: 20px 10px 15px
  @media (min-width: $display-bp-mobile)
    padding: 22px 20px 20px

p.subtitle
  color: $color-alt
  font-size: 15px
  margin: -1rem 0 1.5rem !important
</style>

<style lang="sass">
@media (max-width: $display-bp-mobile)
  div.b-table .has-mobile-cards table.table tr
    box-shadow: none
    border-radius: 6px
    border: 1px solid $color-alt
    margin-top: 10px
    &.table-footer
      border: none
</style>
