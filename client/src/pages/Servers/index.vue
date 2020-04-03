<template lang="pug">
.columns
  .column.is-half
    server-list(
      @selectServer="selectServer"
      :data="list"
      :isLoading="isLoading"
    )
  .column.form
    transition(
      name="fade"
      mode="out-in"
      :duration="{ enter: 150, leave: 150 }"
    )
      div(
        v-if="!('id' in selected)"
      )
        .img-empty
        p.has-text-centered Сервер для редактирования не выбран
      server-form(
        @changeServer="changeServer"
        :selected="selected"
        v-else
      )
</template>

<script>
import methods from '@/services/api/methods'
import ServerList from './ServerList'
import ServerForm from './ServerForm'
import msgAfterServerReq from './mixins/msgAfterServerReq'

export default {
  name: 'Servers',
  components: {
    ServerList,
    ServerForm
  },
  mixins: [
    msgAfterServerReq
  ],
  data () {
    return {
      selected: {},
      list: [],
      isLoading: true
    }
  },
  methods: {
    async fetchServerList () {
      const isFailed = () => {
        this.msgAfterServerReq(
          'При загрузки данных произошла ошибка, попробуйте повторить позднее',
          'is-danger'
        )
      }

      try {
        const request = await methods.httpReq('server')

        if (request.status !== 200) {
          isFailed()
        }

        this.list = request.data
      } catch (e) {
        isFailed()
        throw e
      } finally {
        this.isLoading = false
      }
    },
    selectServer (value) {
      this.selected = value
    },
    changeServer (value) {
      this.list.forEach((e, index) => {
        if (e.id === value.id) {
          this.$set(this.list, index, value)
        }
      })

      this.selected = {}
    }
  },
  async mounted () {
    await this.fetchServerList()
  }
}
</script>

<style lang="sass" scoped>
div.columns
  margin: 0

  .column.form
    @media (min-width: $display-bp-desktop)
      padding-left: 50px
      display: flex
      align-items: center
      justify-content: center

    div.img-empty
      background-image: url("../../assets/choice.svg")
      background-size: 100% 100%
      min-height: 350px
      @media (min-width: $display-bp-desktop)
        min-width: 330px
</style>
