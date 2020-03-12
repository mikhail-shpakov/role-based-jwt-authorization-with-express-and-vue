import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import TopBar from '../index'

describe('./index.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  it('when load page, TopBar renders correctly', () => {
    const wrapper = shallowMount(TopBar, {
      localVue
    })
    expect(wrapper).toMatchSnapshot()
  })
})
