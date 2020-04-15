<template lang="pug">
.columns
  .column.auth-img
  .column
    .tile
      .has-text-centered
        p.auth-title.has-text-weight-medium.is-size-5.has-text-dark Авторизация
        p.auth-subtitle Войдите для доступа к защищённым маршрутам
      form(@keyup.enter="login()")
        b-field(label="Логин")
          b-input(
            v-model.trim='authData.username'
          )
        b-field(label="Пароль")
          b-input(
            type='password'
            password-reveal
            v-model.trim='authData.password'
          )
        .foot
          b-button.is-success(
            @click.native='login()'
            ref="button-login"
            :loading="isLoading"
            :disabled="!authData.username || !authData.password"
          ) Войти
    .tile.helper-data
      p Администратор:
        strong  admin/admin
      p Пользователь:
        strong  user/user
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      authData: {
        username: '',
        password: '',
        fingerprint: ''
      },
      isLoading: false
    }
  },
  computed: {
    ...mapState('user', {
      fingerprint: state => state.fingerprint,
      accessToken: state => state.tokens.accessToken
    })
  },
  methods: {
    ...mapActions('user', [
      'LOGIN'
    ]),
    async login () {
      this.isLoading = true

      this.authData.fingerprint = this.fingerprint
      await this.LOGIN(this.authData)

      this.isLoading = false
    },
    async checkUserAuth () {
      if (this.accessToken) {
        await this.$router.push({ path: '/servers' })
      }
    }
  },
  async created () {
    /**
     * Если пользователь авторизован
     * и пытается перейти по прямой ссылке на страницу /login,
     * то делаем редирект на страницу /servers
     */
    await this.checkUserAuth()
  }
}
</script>

<style lang="sass" scoped>
div
  &.column.auth-img
    background-image: url("../../assets/login.svg")
    background-size: auto 100%
    background-repeat: no-repeat
    background-position: center
    min-height: 450px
    align-self: center
    display: none
    @media (min-width: $display-bp-mobile)
      display: block

  &.tile
    max-width: 350px
    padding: 30px 22px
    border: 1px solid $color-alt
    border-radius: 6px
    display: block
    margin: auto
    @media (min-width: $display-bp-mobile)
      margin: 50px -0.75rem 0 auto
    &.helper-data
      margin-top: 30px
      padding: 20px 25px
      p
        line-height: 1.75

  &.foot
    text-align: right

  &.field
    margin: 30px 0

p.auth-title,
p.auth-subtitle
  margin: 10px 20px
</style>
