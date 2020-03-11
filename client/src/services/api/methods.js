import api from './entrypoint'

export default {
  fetchData (uri, params = null) {
    return api().get(uri, params)
      .then(response => response)
      .catch(e => { throw e })
  },
  patchData (uri, params = null) {
    return api().patch(uri, params)
      .then(response => response)
      .catch(e => { throw e })
  }
}
