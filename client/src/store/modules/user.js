import methods from '@/services/api/methods'
import router from '../../router'
import toast from '../../helpers/programmaticToast'
import store from '../index'

const jwt = require('jsonwebtoken')

const state = {
  userInfo: {},
  tokens: {
    accessToken: '',
    refreshToken: ''
  },
  fingerprint: ''
}

const getters = {
  GET_USER: (state) => state
}

const mutations = {
  SET_USER_DATA (state, tokens) {
    state.tokens = { ...tokens }
    state.userInfo = { ...jwt.decode(tokens.accessToken) }
  },
  REMOVE_USER_DATA (state) {
    state.tokens = {
      accessToken: '',
      refreshToken: ''
    }
    state.userInfo = {}
  },
  SET_FINGERPRINT (state, fingerprint) {
    state.fingerprint = fingerprint
  }
}

const actions = {
  LOGIN: async (context, authData) => {
    try {
      const request = await methods.baseHttpReq('auth/login', 'post', authData)

      if (request.status === 200) {
        await context.commit('SET_USER_DATA', request.data)
        await router.push({ path: '/servers' })
      }

      if (request.status === 401) {
        toast('Неверный логин или пароль')
      }
    } catch (e) {
      console.error(e)
    }
  },

  UPDATE_TOKENS: async (context) => {
    try {
      const request = await methods.baseHttpReq(
        'auth/refresh-tokens',
        'post',
        { refreshToken: context.state.tokens.refreshToken, fingerprint: context.state.fingerprint }
      )

      if (request.status === 200) {
        await context.commit('SET_USER_DATA', request.data)
        return true
      }

      if (request.status === 401) {
        await context.commit('REMOVE_USER_DATA')
        await router.push({ path: '/login' })
        toast('Сессия истекла, необходимо заново пройти авторизацию')
      }

      return false
    } catch (e) {
      console.error(e)
      return false
    }
  },

  LOGOUT: async (context) => {
    try {
      const request = await methods.extendHttpReq(
        'auth/logout',
        'post',
        { refreshToken: context.state.tokens.refreshToken }
      )

      if (request.status === 200) {
        await store.commit('server/REMOVE_SERVER_LIST')
        await context.commit('REMOVE_USER_DATA')
        await router.push({ path: '/login' })
      }
    } catch (e) {
      console.error(e)
    }
  },

  SET_FINGERPRINT: async (context, fingerprint) => {
    await context.commit('SET_FINGERPRINT', fingerprint)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
