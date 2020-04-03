<template lang="pug">
.columns
  .column.auth-img
  .column
    .tile
      .has-text-centered
        p.auth-title.has-text-weight-medium.is-size-5.has-text-dark Авторизация
        p.auth-subtitle Войдите для доступа к защищённым маршрутам
      form(@keyup.enter="login(authData)")
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
          b-button.button.is-success(
            @click='login(authData)'
            :loading="isLoading"
            :disabled="authData.username && authData.password === ''"
          ) Войти
    .tile.helper-data
      p Администратор:
        strong  admin/admin
      p Пользователь:
        strong  user/user
</template>

<script>
import Fingerprint2 from 'fingerprintjs2'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      authData: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions('user', [
      'LOGIN'
    ]),
    async login (authData) {
      this.isLoading = true
      await this.LOGIN(authData)
      this.isLoading = false
    }
  },
  mounted () {
    if (window.requestIdleCallback) {
      requestIdleCallback(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
        })
      })
    } else {
      setTimeout(function () {
        Fingerprint2.get(function (components) {
          console.log(components) // an array of components: {key: ..., value: ...}
        })
      }, 500)
    }
  }
}
</script>

<style lang="sass" scoped>
div
  &.column.auth-img
    background-image: url("../../assets/login.svg")
    background-size: 100% 100%
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
