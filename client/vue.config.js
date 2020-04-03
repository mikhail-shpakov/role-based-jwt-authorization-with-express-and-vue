module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/variables.sass"'
      }
    }
  },
  pwa: {
    name: 'Role based authorization with vue and express',
    themeColor: '#FFFFFF'
  }
}
