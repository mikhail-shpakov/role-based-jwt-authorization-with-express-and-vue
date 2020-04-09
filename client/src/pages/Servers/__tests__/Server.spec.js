import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Servers from '../index'
import ServerList from '../ServerList'
import ServerForm from '../ServerForm'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

describe('Servers', () => {
  let store

  beforeEach(() => {
    const state = {
      userInfo: {
        permissions: ['admin']
      }
    }
    store = new Vuex.Store({
      modules: {
        user: {
          state,
          namespaced: true
        }
      }
    })
  })

  it('when load page and user logged in as user, Servers renders correctly', () => {
    store.state.user.userInfo.permissions = ['user']

    const wrapper = shallowMount(Servers, {
      localVue,
      store
    })
    const img = wrapper.find('.img')
    const imgSubtitle = wrapper.find('.has-text-centered').text()

    expect(img.classes('not-allowed')).toBe(true)
    expect(imgSubtitle).toEqual('Добавлять, удалять и редактировать сервера может только администратор')
    expect(wrapper).toMatchSnapshot()
  })

  it('when load page and user logged in as admin, Servers renders correctly', () => {
    const wrapper = shallowMount(Servers, {
      localVue,
      store
    })
    const img = wrapper.find('.img')
    const imgSubtitle = wrapper.find('.has-text-centered').text()

    expect(img.classes('choice')).toBe(true)
    expect(imgSubtitle).toEqual('Сервер для редактирования не выбран')
    expect(wrapper).toMatchSnapshot()
  })

  it('when ServerList emitted event, ServerForm rendering', async () => {
    const wrapper = shallowMount(Servers, {
      localVue,
      store
    })
    const selected = {
      id: 1,
      serverName: 'Супер сервер',
      serverType: 'dedicated'
    }
    wrapper.find(ServerList).vm.$emit('selectServer', selected)

    await wrapper.vm.$nextTick()

    expect(wrapper.contains(ServerForm)).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
