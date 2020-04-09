import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import TopBar from '../index'

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(Vuex)

describe('Login', () => {
  let store
  let actions

  beforeEach(() => {
    const state = {
      tokens: {
        accessToken: ''
      },
      fingerprint: 'some fingerprint'
    }

    actions = {
      LOGIN: jest.fn()
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

  it('when load page, Login renders correctly', () => {
    const wrapper = shallowMount(TopBar, {
      localVue,
      store
    })

    expect(wrapper).toMatchSnapshot()
  })

  it('when inputs not empty and click login Button, will be called Vuex LOGIN()', () => {
    const wrapper = shallowMount(TopBar, {
      localVue,
      store
    })
    const button = wrapper.find({ ref: 'button-login' })

    button.trigger('click')

    expect(actions.LOGIN).toHaveBeenCalled()
  })
})
