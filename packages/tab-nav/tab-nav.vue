<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  onMounted,
  provide,
  Ref,
  ref,
  Slots,
  VNode
} from 'vue'
import TabNavItem from './tab-nav-item.vue'
export default defineComponent({
  name: 'PrTabNav',
  setup(props, ctx) {
    const state = ref({
      active: 0,
      items: []
    })

    provide('parent', state)

    const slots: Ref<VNode[]> = computed(() => {
      return ctx.slots.default()
    })

    const tabNavItems = computed(() => {
      const items = slots.value.map((v) => {
        return h(TabNavItem, {
          className: 'tabnav-tab cursor-pointer',
          ...v.props
        })
      })
      return items
    })

    const currentComponent = computed(() => {
      return (slots.value[state.value.active].children as Slots).default()
    })

    const render = () => {
      return [
        h(
          'div',
          {
            className: 'tabnav'
          },
          h(
            'nav',
            {
              className: 'tabnav-tabs'
            },
            tabNavItems.value
          )
        ),
        h('div', currentComponent.value)
      ]
    }
    return render
  }
})
</script>
