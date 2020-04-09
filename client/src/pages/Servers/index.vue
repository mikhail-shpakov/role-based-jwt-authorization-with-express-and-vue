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
        v-if="!Object.keys(selected).length"
      )
        .img(
          :class="{ 'choice': role === 'admin', 'not-allowed': role === 'user' }"
        )
        p.has-text-centered {{ imgSubtitle }}
      server-form(
        :selected="selected"
        v-else
      )
</template>

<script>
// eslint-disable-next-line no-unused-vars
import methods from '@/services/api/methods'
import { mapState } from 'vuex'
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
  computed: {
    ...mapState('user', {
      role: state => Object.keys(state.userInfo).length ? state.userInfo.permissions[0] : 'user'
    }),
    imgSubtitle () {
      return this.role === 'admin'
        ? 'Сервер для редактирования не выбран'
        : 'Добавлять, удалять и редактировать сервера может только администратор'
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
      justify-content: center

    div.img
      background-size: 100% 100%
      min-height: 350px
      &.not-allowed
        background-image: url("../../assets/not-allowed.svg")
        margin: auto
        max-width: 240px
      &.choice
        background-image: url("../../assets/choice.svg")
        @media (min-width: $display-bp-desktop)
          min-width: 330px
</style>
