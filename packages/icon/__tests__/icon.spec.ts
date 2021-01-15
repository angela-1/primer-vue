import { mount } from '@vue/test-utils'
import Icon from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('Icon.vue', () => {
  test('render test', () => {
    const wrapper = mount(Icon, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
