import api from './entrypoint'

export default {
  httpReq (uri, method = 'get', params = null) {
    return api()[method](uri, params)
      .then(response => response)
      .catch(e => { throw e })
  }
}
