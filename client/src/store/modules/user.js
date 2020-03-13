import methods from '@/services/api/methods'
const jwt = require('jsonwebtoken')

const state = {
  userInfo: {},
  token: ''
}

const getters = {
  GET_USER: (state) => state.userInfo
}

const mutations = {
  SET_USER (state, token) {
    state.userInfo = user
  }
}

const actions = {
  LOGIN: async (context, authData) => {
    try {
      const request = await methods.httpReq('auth/login', 'post', authData)

      if (request.status !== 200) {
        console.warn('Error')
      }

      await context.commit('SET_USER', request.data.token)
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
