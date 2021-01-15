import { mount } from '@vue/test-utils'
import Sidenav from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('Sidenav.vue', () => {
  test('render test', () => {
    const wrapper = mount(Sidenav, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
