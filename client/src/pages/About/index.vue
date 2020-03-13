<template lang="pug">
.section
  .about-img
  div.has-text-centered
    p About page
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="sass" scoped>
div.section
  .about-img
    background-image: url("../../assets/about.svg")
    background-size: 100% 100%
    min-height: 220px
</style>
