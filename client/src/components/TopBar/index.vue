<template lang="pug">
.section.is-vertical-center
  b-navbar.navbar-custom
    template(slot="brand")
      b-navbar-item.item-logo(
        href="https://shpakov.dev/"
        target="_blank"
        rel="noopener"
      )
        img(
          src="@/assets/logo.svg"
          alt="img-logo"
        )

    template(slot='start')
      b-button.is-text(
        tag="router-link"
        to="Servers"
        v-if="accessToken"
      ) Сервера

    template(slot='end')
      b-button.is-text(
        tag="router-link"
        to="About"
      ) О приложении
      b-button(
        tag="a"
        href="https://github.com/mikhail-shpakov/role-based-jwt-authorization-with-express-and-vue"
        target="_blank"
        rel="noopener"
        icon-left="github"
      ) Репозиторий
      b-button.is-danger.is-outlined(
        tag="a"
        @click="logout"
        :loading="isLoading"
        v-if="accessToken"
      ) Выйти
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TopBar',
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState('user', {
      accessToken: state => state.tokens.accessToken
    })
  },
  methods: {
    ...mapActions('user', [
      'LOGOUT'
    ]),
    async logout () {
      this.isLoading = true
      await this.LOGOUT()
      this.isLoading = false
    }
  }
}
</script>

<style lang="sass" scoped>
div.section
  border-bottom: 1px solid $color-alt
  padding: 0
  vertical-align: center
  @media (min-width: $display-bp-desktop)
    padding: 0.75rem 0

    .navbar-custom
      width: $display-width
      margin: auto

  .navbar-item img
    max-height: 36px
    @media (min-width: $display-bp-desktop)
      max-height: 50px

  a.button
    align-self: center
    margin: 0.5rem 0.75rem
    display: table
    width: auto
    @media (min-width: $display-bp-desktop)
      margin: 0 0 0 0.75rem
      display: inline-flex

    &.is-text
      text-decoration: none
</style>
