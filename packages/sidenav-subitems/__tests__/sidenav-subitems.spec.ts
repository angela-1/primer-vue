import { mount } from '@vue/test-utils'
import SidenavSubitems from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('SidenavSubitems.vue', () => {
  test('render test', () => {
    const wrapper = mount(SidenavSubitems, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
