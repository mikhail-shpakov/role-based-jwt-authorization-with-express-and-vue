import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import mainPage from '../index'

describe('./index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  it('when load page, mainPage renders correctly', () => {
    const wrapper = shallowMount(mainPage, {
      localVue
    })
    expect(wrapper).toMatchSnapshot()
  })
})
