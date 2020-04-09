import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import ServerForm from '../ServerForm'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

describe('./ServerForm.vue', () => {
  let store
  let actions
  let selected

  beforeEach(() => {
    selected = {
      id: '1',
      serverName: 'Супер сервер',
      serverType: 'dedicated'
    }

    window.confirm = jest.fn(() => true)

    actions = {
      EDIT_SERVER: jest.fn(),
      ADD_SERVER: jest.fn(),
      DELETE_SERVER: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        server: {
          actions,
          namespaced: true
        }
      }
    })
  })

  it('when load page, ServerForm renders correctly', () => {
    const wrapper = shallowMount(ServerForm, {
      localVue,
      store,
      propsData: { selected }
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('when click button for edit exist server,' +
    'but local input value not changes, will be not called EDIT_SERVER()', () => {
    const wrapper = shallowMount(ServerForm, {
      localVue,
      store,
      propsData: { selected }
    })
    const button = wrapper.find({ ref: 'button-ed' })

    button.trigger('click')

    expect(actions.EDIT_SERVER).toHaveBeenCalled()
  })

  it('when click button for edit exist server,' +
    'and local input value changes, will be called Vuex EDIT_SERVER()', () => {
    const wrapper = shallowMount(ServerForm, {
      localVue,
      store,
      propsData: { selected }
    })
    const button = wrapper.find({ ref: 'button-ed' })
    wrapper.setData({
      local: {
        serverName: 'New name'
      }
    })

    button.trigger('click')

    expect(actions.EDIT_SERVER).toHaveBeenCalled()
  })

  it('when click button for add server,' +
    'and input not empty, will be called Vuex ADD_SERVER()', () => {
    selected.id = 0

    const wrapper = shallowMount(ServerForm, {
      localVue,
      store,
      propsData: { selected }
    })
    const button = wrapper.find({ ref: 'button-ed' })
    wrapper.setData({
      local: {
        serverName: 'New name'
      }
    })

    button.trigger('click')

    expect(actions.ADD_SERVER).toHaveBeenCalled()
  })

  it('when click button for delete server, will be called modal', async () => {
    const wrapper = shallowMount(ServerForm, {
      localVue,
      store,
      propsData: { selected }
    })
    const button = wrapper.find({ ref: 'button-delete' })

    button.trigger('click')

    expect(window.confirm)
  })
})
