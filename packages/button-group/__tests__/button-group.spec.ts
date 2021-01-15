import { mount } from '@vue/test-utils'
import ButtonGroup from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('ButtonGroup.vue', () => {
  test('render test', () => {
    const wrapper = mount(ButtonGroup, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
