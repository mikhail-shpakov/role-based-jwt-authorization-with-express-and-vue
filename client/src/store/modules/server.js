import methods from '@/services/api/methods'
import Vue from 'vue'

const state = {
  serverList: []
}

const mutations = {
  SET_SERVER_LIST (state, serverList) {
    state.serverList = serverList
  },
  EDIT_SERVER (state, newServerValue) {
    const indexChangedServer = state.serverList.findIndex(s => s.id === newServerValue.id)
    Vue.set(state.serverList, indexChangedServer, newServerValue)
  }
}

const actions = {
  GET_SERVER_LIST: async (context) => {
    try {
      const request = await methods.extendHttpReq('server', 'get')

      if (request.status === 200) {
        await context.commit('SET_SERVER_LIST', request.data)
      }
    } catch (e) {
      console.error(e)
    }
  },
  EDIT_SERVER: async (context, newServerValue) => {
    try {
      const request = await methods.extendHttpReq('server', 'patch', newServerValue)

      if (request.status === 204) {
        await context.commit('EDIT_SERVER', newServerValue)
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
