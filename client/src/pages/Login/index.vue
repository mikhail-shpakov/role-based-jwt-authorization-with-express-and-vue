<template lang="pug">
.columns
  .column.auth-img
  .column
    .tile
      .has-text-centered
        p.auth-title.has-text-weight-medium.is-size-5.has-text-dark Авторизация
        p.auth-subtitle Войдите для доступа к защищённым маршрутам
      form(@keyup.enter="loginUser()")
        b-field(label="Логин")
          b-input(
            v-model.trim='userData.login'
          )
        b-field(label="Пароль")
          b-input(
            type='password'
            password-reveal
            v-model.trim='userData.password'
          )
        .foot
          b-button.button.is-success(
            @click='loginUser()'
            :loading="isLoading"
            :disabled="userData.login && userData.password === ''"
          ) Войти
    .tile.helper-data
      p Администратор:
        strong  admin/admin
      p Пользователь:
        strong  user/user
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      userData: {
        login: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    loginUser () {
      this.isLoading = true

      this.$router.push('servers')
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
    padding: 20px 22px
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
