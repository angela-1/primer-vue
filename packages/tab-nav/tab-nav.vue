<template>
  <div class="tabnav">
    <nav class="tabnav-tabs">
      <pr-tab-nav-item
        v-for="item in tabNavItems"
        :key="item.name"
        :name="item.name"
        :label="item.label"
        @click="submit(item.name)"
        :aria-current="item.name === selected ? 'page' : 'false'"
      ></pr-tab-nav-item>
    </nav>
  </div>
  <component :is="current" :key="current.props.name"></component>
</template>

<script lang="ts">
import { Component, computed, defineComponent, h, ref, Slots, VNode } from 'vue'
import PrTabNavItem from './tab-nav-item.vue'
import PrTabNavPane from './tab-nav-pane.vue'
export default defineComponent({
  name: 'PrTabNav',
  components: {
    PrTabNavItem
  },
  emits: ['update:selected'],
  setup(props, ctx) {
    const slots = ctx.slots.default()
    slots.forEach((pane) => {
      if ((pane.type as Component).name !== PrTabNavPane.name) {
        throw new Error('pr-tab-nav 子标签必须是 pr-tab-nav-pane')
      }
    })

    const selected = ref(slots[0].props.name)

    const tabNavItems = computed(() => {
      return slots.map((v) => v.props)
    })

    const submit = (val: string) => {
      selected.value = val
      ctx.emit('update:selected', val)
    }

    const current = computed(() => {
      return slots.find((v) => v.props.name === selected.value)
    })

    // const tabNavItems = computed(() => {
    //   const items = slots.map((v) => {
    //     return h(TabNavItem, {
    //       className: 'tabnav-tab cursor-pointer',
    //       ...v.props
    //     })
    //   })
    //   return items
    // })

    // const currentComponent = computed(() => {
    //   console.log('sv', ctx.slots.default()[state.value.active])
    //   return ctx.slots.default()[1]
    //   // return slots.value[state.value.active].type.name
    //   // return (slots.value[state.value.active].children as Slots).default()
    // })

    // const render = () => {
    //   return [
    //     h(
    //       'div',
    //       {
    //         className: 'tabnav'
    //       },
    //       h(
    //         'nav',
    //         {
    //           className: 'tabnav-tabs'
    //         },
    //         tabNavItems.value
    //       )
    //     ),
    //     currentComponent.value
    //     // h('div', currentComponent.value)
    //   ]
    // }
    return {
      tabNavItems,
      selected,
      submit,
      current
    }
  }
})
</script>
<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
</style>
