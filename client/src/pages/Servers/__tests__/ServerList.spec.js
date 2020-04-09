import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import ServerList from '../ServerList'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

describe('ServerList', () => {
  let store
  let actions
  let serverList

  beforeEach(() => {
    const state = {
      userInfo: {
        permissions: ['admin']
      }
    }

    serverList = [{
      id: '1',
      serverName: 'Супер сервер',
      serverType: 'dedicated'
    }]

    actions = {
      GET_SERVER_LIST: jest.fn(() => serverList)
    }

    store = new Vuex.Store({
      modules: {
        user: {
          state,
          namespaced: true
        },
        server: {
          state: {
            serverList: []
          },
          actions,
          namespaced: true
        }
      }
    })
  })

  it('when load page, ServerList renders correctly', () => {
    const wrapper = shallowMount(ServerList, {
      localVue,
      store
    })

    expect(actions.GET_SERVER_LIST).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
  })

  it('when admin click row table, will be emitted "selectServer" event', async () => {
    const wrapper = mount(ServerList, {
      localVue,
      store
    })
    wrapper.setData({ selected: serverList[0] })

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().selectServer).toBeTruthy()
  })

  it('when admin click add server button, will be emitted "selectServer" event', () => {
    const wrapper = mount(ServerList, {
      localVue,
      store
    })
    const buttonAddServer = wrapper.find('a')

    buttonAddServer.trigger('click')

    expect(wrapper.emitted().selectServer).toBeTruthy()
  })

  it('when user click row table, will not be emitted "selectServer" event', async () => {
    store.state.user.userInfo.permissions = ['user']

    const wrapper = mount(ServerList, {
      localVue,
      store
    })
    wrapper.setData({ selected: serverList[0] })

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().selectServer).toBeFalsy()
  })

  it('when login user, show user subtitle', () => {
    store.state.user.userInfo.permissions = ['user']

    const wrapper = mount(ServerList, {
      localVue,
      store
    })
    const subtitle = wrapper.find('.subtitle')
    expect(subtitle.text()).toEqual('Пользователь может только просматривать список серверов')
  })

  it('when login admin, show admin subtitle', () => {
    const wrapper = mount(ServerList, {
      localVue,
      store
    })
    const subtitle = wrapper.find('.subtitle')
    expect(subtitle.text()).toEqual(
      'Нажмите на любой сервер, чтобы начать редактирование' +
      ' и Esc, чтобы выйти из режима редактирования'
    )
  })
})
