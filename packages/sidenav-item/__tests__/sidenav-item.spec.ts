import { mount } from '@vue/test-utils'
import SidenavItem from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('SidenavItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(SidenavItem, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
