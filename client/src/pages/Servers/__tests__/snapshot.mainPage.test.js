import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import Servers from '../index'

describe('./index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  it('when load page, Servers renders correctly', () => {
    const wrapper = shallowMount(Servers, {
      localVue
    })
    expect(wrapper).toMatchSnapshot()
  })
})
