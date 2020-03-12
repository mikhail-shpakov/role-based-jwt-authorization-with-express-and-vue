import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import serverForm from '../serverForm'

describe('./ServerForm.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const selected = {
    id: 'user5',
    serverName: 'server2',
    serverType: 'dedicated'
  }

  it('when load page, form renders correctly', () => {
    const wrapper = shallowMount(serverForm, {
      localVue,
      propsData: { selected }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
