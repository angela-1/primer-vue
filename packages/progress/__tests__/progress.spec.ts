import { mount } from '@vue/test-utils'
import Progress from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('Progress.vue', () => {
  test('render test', () => {
    const wrapper = mount(Progress, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
