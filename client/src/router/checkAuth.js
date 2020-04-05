import store from '../store'

/**
 * Если пользователь не авторизован
 * и пытается перейти по прямой ссылке
 * на страницу, где требуется авторизация,
 * то делаем редирект на страницу /login
 */
export default (to, from, next) => {
  const publicPages = ['/', '/login', '/about', '/404']
  const authNotRequired = publicPages.includes(to.path.toLowerCase())
  const user = store.getters['user/GET_USER']

  if (authNotRequired || user.tokens.accessToken) {
    return next()
  }

  return next('/login')
}
