import { mount } from '@vue/test-utils'
import Pagination from '../src/index.vue'
const AXIOM = 'Rem is the best girl'
describe('Pagination.vue', () => {
  test('render test', () => {
    const wrapper = mount(Pagination, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
