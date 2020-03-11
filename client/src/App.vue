<template lang="pug">
#app
  top-bar
  .pages
    main-page
</template>

<script>
import topBar from './components/topBar/index'
import mainPage from './pages/mainPage'

export default {
  components: {
    topBar,
    mainPage
  }
}

</script>

<style lang="sass">
#app
  min-width: 320px
  .pages
    max-width: $display-width
    margin: 50px auto
</style>
