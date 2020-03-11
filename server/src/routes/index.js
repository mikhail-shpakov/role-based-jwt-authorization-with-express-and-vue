module.exports = app => {
  app.use(require('./server/get/'))
  app.use(require('./server/edit/'))
}
