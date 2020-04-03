import methods from '@/services/api/methods'
import router from '../../router'
import failedToast from '../../helpers/failedToast'
const jwt = require('jsonwebtoken')

const state = {
  userInfo: {},
  token: '', // TODO поменять название на accessToken?
  refreshToken: ''
}

const getters = {
  GET_USER: (state) => state.userInfo,
  GET_TOKEN: (state) => state.token
}

const mutations = {
  SET_USER_DATA (state, token) {
    state.token = token
    state.userInfo = jwt.decode(token)
  },
  REMOVE_USER_DATA (state) {
    state.token = ''
    state.userInfo = {}
  }
}

const actions = {
  LOGIN: async (context, authData) => {
    try {
      const request = await methods.httpReq('auth/login', 'post', authData)

      if (request.status === 401) {
        failedToast('Неверный логин или пароль')
        return
      }

      await context.commit('SET_USER_DATA', request.data.sessionInfo.accessToken)
      await router.push({ path: '/servers' })
    } catch (e) {
      console.error(e)
    }
  },
  LOGOUT: async (context) => {
    try {
      await methods.httpReq('auth/logout', 'get')
      await context.commit('REMOVE_USER_DATA')
      await router.push({ path: '/login' })
    } catch (e) {
      console.error(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
