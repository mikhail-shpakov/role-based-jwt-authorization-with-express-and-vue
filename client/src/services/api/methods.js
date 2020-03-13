import api from './entrypoint'
import router from '../../router'
import store from '../../store'
import axios from 'axios'
import failedToast from '../../helpers/failedToast'

const publicPages = ['auth/login']

export default {
  httpReq (uri, method = 'get', params = null) {
    if (!publicPages.includes(uri)) {
      const token = store.getters['user/GET_TOKEN']
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }

    return api()[method](uri, params)
      .then(response => response)
      .catch(e => {
        if (e.response.status === 401) {
          router.push({ path: 'login' })
          return e.response
        }

        failedToast('При запросе на сервер произошла ошибка, попробуйте повторить позднее')
        return e
      })
  }
}
