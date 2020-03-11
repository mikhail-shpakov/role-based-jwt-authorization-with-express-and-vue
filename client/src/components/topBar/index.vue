<template functional lang="pug">
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
    template(slot='end')
      b-button.is-text(
        tag="a"
        href="https://github.com/mikhail-shpakov/role-based-jwt-authorization-with-express-and-vue"
        target="_blank"
        rel="noopener"
        icon-left="github-circle"
      ) Репозиторий
</template>

<script>
export default {
  name: 'topBar'
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
  a.button.is-text
    align-self: center
</style>
