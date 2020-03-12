<template lang="pug">
#app
  top-bar
  router-view.pages
</template>

<script>
import TopBar from './components/TopBar/index'
import Servers from './pages/Servers'

export default {
  components: {
    TopBar,
    Servers
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
