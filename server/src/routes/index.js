module.exports = app => {
  app.use(require('./swagger/'))
  app.use(require('./auth/login/'))
  app.use(require('./auth/logout/'))
  app.use(require('./server/get/'))
  app.use(require('./server/edit/'))
}
