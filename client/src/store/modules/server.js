import methods from '@/services/api/methods'
import Vue from 'vue'
import toast from '../../helpers/programmaticToast'

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
  },
  DELETE_SERVER (state, id) {
    const indexDeleteServer = state.serverList.findIndex(s => s.id === id)
    state.serverList.splice(indexDeleteServer, 1)
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
        toast('Изменения сохранены', 'is-success')
      }
    } catch (e) {
      console.error(e)
    }
  },
  DELETE_SERVER: async (context, id) => {
    try {
      const request = await methods.extendHttpReq('server', 'delete', { data: { id } })

      if (request.status === 204) {
        await context.commit('DELETE_SERVER', id)
        toast('Сервер удалён', 'is-success')
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
