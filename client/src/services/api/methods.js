import api from './entrypoint'
import store from '../../store'
import axios from 'axios'
import toast from '../../helpers/programmaticToast'

const user = store?.getters['user/GET_USER']
const publicPages = ['auth/login', 'auth/refresh-tokens']

const checkNeedUseBearerToken = (uri) => {
  if (!publicPages.includes(uri)) {
    axios.defaults.headers.common.Authorization = `Bearer ${user.tokens.accessToken}`
  }
}

const checkExpiredAccessToken = async (uri) => {
  if (!publicPages.includes(uri)) {
    const tokenExpire = user.userInfo.exp
    const dateNow = Math.floor(Date.now().valueOf() / 1000)

    return tokenExpire < dateNow
      ? store.dispatch('user/UPDATE_TOKENS')
      : true
  }
  return true
}

const baseHttpReq = async (uri, method, params = null) => {
  return api()[method](uri, params)
    .then(response => response)
    .catch(e => {
      if (!e.response || e.response.status !== 401) {
        toast('При запросе на сервер произошла ошибка, попробуйте повторить позднее')
      }
      return e.response || e
    })
}

const extendHttpReq = async (uri, method = 'get', params = null) => {
  const checkAccessToken = await checkExpiredAccessToken(uri)

  if (checkAccessToken) {
    checkNeedUseBearerToken(uri)

    return baseHttpReq(uri, method, params)
  }
}

export default { baseHttpReq, extendHttpReq }
