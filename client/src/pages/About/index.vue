<template lang="pug">
.section
  .about-img
  div.has-text-centered
    p About page
    div(v-html="md")
</template>

<script>
import marked from 'marked'

export default {
  name: 'About',
  data () {
    return {
      md_text: '# Title'
    }
  },
  computed: {
    md () {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        smartLists: true,
        smartypants: false
      })
      return marked(this.md_text)
    }
  }
}
</script>

<style lang="sass" scoped>
div.section
  .about-img
    background-image: url("../../assets/about.svg")
    background-size: 100% 100%
    min-height: 220px
</style>
