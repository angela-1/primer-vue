import { mount } from '@vue/test-utils'
import DateRange from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('DateRange.vue', () => {
  test('render test', () => {
    const wrapper = mount(DateRange, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
