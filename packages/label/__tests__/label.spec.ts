import { mount } from '@vue/test-utils'
import Label from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('Label.vue', () => {
  test('render test', () => {
    const wrapper = mount(Label, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
