import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import TopBar from '../index'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

describe('TopBar', () => {
  let store
  let actions

  beforeEach(() => {
    const state = {
      tokens: {
        accessToken: 'some token'
      }
    }

    actions = {
      LOGOUT: jest.fn()
    }

    store = new Vuex.Store({
      modules: {
        user: {
          state,
          actions,
          namespaced: true
        }
      }
    })
  })

  it('when load page and user non auth, TopBar renders correctly', () => {
    store.state.user.tokens.accessToken = ''

    const wrapper = shallowMount(TopBar, {
      localVue,
      store
    })
    const buttonLogout = wrapper.find({ ref: 'button-logout' })
    const buttonLink = wrapper.find({ ref: 'button-link' })

    expect(buttonLogout.exists()).toEqual(false)
    expect(buttonLink.text()).toEqual('Войти')
    expect(wrapper).toMatchSnapshot()
  })

  it('when load page and user auth, TopBar renders correctly', () => {
    const wrapper = shallowMount(TopBar, {
      localVue,
      store
    })
    const buttonLogout = wrapper.find({ ref: 'button-logout' })
    const buttonLink = wrapper.find({ ref: 'button-link' })

    expect(buttonLogout.exists()).toEqual(true)
    expect(buttonLink.text()).toEqual('Сервера')
    expect(wrapper).toMatchSnapshot()
  })

  it('when user auth and click logout Button, will be called Vuex LOGOUT()', () => {
    const wrapper = shallowMount(TopBar, {
      localVue,
      store
    })
    const button = wrapper.find({ ref: 'button-logout' })

    button.trigger('click')

    expect(actions.LOGOUT).toHaveBeenCalled()
  })
})
