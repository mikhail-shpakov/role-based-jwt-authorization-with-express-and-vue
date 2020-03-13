module.exports = app => {
  app.use(require('./server/get/'))
  app.use(require('./server/edit/'))
  app.use(require('./auth/login/'))
  app.use(require('./auth/logout/'))
}
