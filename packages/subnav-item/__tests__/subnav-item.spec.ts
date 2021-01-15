import { mount } from '@vue/test-utils'
import SubnavItem from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('SubnavItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(SubnavItem, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
