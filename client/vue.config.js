const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

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
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/about']
      })
    ]
  }
}
