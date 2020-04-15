<template lang="pug" functional>
.section
  .about-img
  .has-text-centered
    p.about-paragraph by
      a(
        href="https://shpakov.dev"
        target="_blank"
        rel="noopener"
      )
        strong  Mikhail Shpakov
    .about-container
      p.about-paragraph Пример простого клиент-серверного
        a(
          href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5"
          target="_blank"
          rel="noopener"
        )  SPA
        |  и
        a(
          href="https://web.dev/progressive-web-apps/"
          target="_blank"
          rel="noopener"
        )  PWA
        |  приложения, которое реализует авторизацию на основе
        a(
          href="https://jwt.io/"
          target="_blank"
          rel="noopener"
        )  JWT
        |  с разделением прав пользователей в зависимости от их роли (пользователь/администратор)
        |  и демонстрирует классические
        a(
          href="https://ru.wikipedia.org/wiki/CRUD"
          target="_blank"
          rel="noopener"
        )  CRUD
        |  операции.
      p.about-paragraph Имплементация JWT авторизации выполнена в соответствии с
        a(
          href="https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc"
          target="_blank"
          rel="noopener"
        )  описанием
        |  и реализует работу с Access и Refresh токенами, а также мультилогин.
      p.about-paragraph Полное описание доступно в
        a(
          href="https://github.com/mikhail-shpakov/role-based-jwt-authorization-with-express-and-vue"
          target="_blank"
          rel="noopener"
        )  репозитории приложения
        | .
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="sass" scoped>
div.section
  div.about-img
    background-image: url("../../assets/about.svg")
    background-size: auto 100%
    background-repeat: no-repeat
    background-position: center
    min-height: 220px
  div.about-container
    max-width: 470px
    margin: auto
  p.about-paragraph
    margin: 10px 0
    a strong
      font-weight: 500
</style>
