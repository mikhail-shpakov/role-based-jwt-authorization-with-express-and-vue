import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import serverForm from '../serverForm'

describe('./ServerForm.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const selected = {
    user_id: 'user5',
    server_name: 'server2',
    server_type: 'dedicated'
  }

  it('when load page, form renders correctly', () => {
    const wrapper = shallowMount(serverForm, {
      localVue,
      propsData: { selected }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
