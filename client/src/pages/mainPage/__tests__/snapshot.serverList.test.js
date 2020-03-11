import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import serverList from '../serverList'

describe('./serverList.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const data = [{
    customer_id: 'user5',
    server_name: 'server2',
    server_type: 'dedicated'
  }]

  const isLoading = false

  it('when load page, list renders correctly', () => {
    const wrapper = shallowMount(serverList, {
      localVue,
      propsData: { data, isLoading }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
