import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = "Welcome to Your Bowling App"
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg : msg }
    })
    expect(wrapper.props().msg).to.equal("Welcome to Your Bowling App");
  })
})
