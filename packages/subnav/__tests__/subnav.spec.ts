import { mount } from '@vue/test-utils'
import Subnav from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('Subnav.vue', () => {
  test('render test', () => {
    const wrapper = mount(Subnav, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
