import { createLocalVue, shallowMount } from '@vue/test-utils'
import Buefy from 'buefy'
import serverList from '../serverList'

describe('./ServerList.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const data = [{
    id: 'user5',
    serverName: 'server2',
    serverType: 'dedicated'
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
