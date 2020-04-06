module.exports = app => {
  app.use(require('./swagger/'))
  app.use(require('./auth/login/'))
  app.use(require('./auth/refresh-tokens/'))
  app.use(require('./auth/logout'))
  app.use(require('./server/get/'))
  app.use(require('./server/edit/'))
  app.use(require('./server/add/'))
  app.use(require('./server/delete/'))
}
