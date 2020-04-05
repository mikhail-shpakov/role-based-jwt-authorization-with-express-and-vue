<template lang="pug">
.columns
  .column.is-half
    server-list(
      @selectServer="selectServer"
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
        :selected="selected"
        v-else
      )
</template>

<script>
// FIXME при удалении перестаёт рабоать о_0
// eslint-disable-next-line no-unused-vars
import methods from '@/services/api/methods'
import ServerList from './ServerList'
import ServerForm from './ServerForm'

export default {
  name: 'Servers',
  components: {
    ServerList,
    ServerForm
  },
  data () {
    return {
      selected: {}
    }
  },
  methods: {
    selectServer (value) {
      this.selected = value
    }
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
