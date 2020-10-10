<template>
  <ul class="sidebar-products">
    <slot></slot>
  </ul>
  <div class="text-white">{{ selected }}</div>
</template>

<script lang="ts">
import { Component, defineComponent, Fragment, provide, ref, VNode } from 'vue'
import PrSideNavItem from './side-nav-item.vue'
export default defineComponent({
  name: 'PrSideNav',
  components: {
    PrSideNavItem
  },
  setup(props, ctx) {
    const slots = ctx.slots.default()
    const isFragment = ref(false)

    slots.forEach((v) => {
      console.log('how much slots', v)
    })

    const firstChild = (vnodes: VNode[], elementName: string): VNode => {
      let element = vnodes.find((v) => {
        return typeof v.type !== 'symbol'
      })
      if (!element) {
        element = firstChild(vnodes[0].children as VNode[])
      }
      return element
    }

    const findFirstChildName = (): string => {
      const element = firstChild(slots)
      console.log('zhaodao', element.props)
      return element.props.name
    }

    const selected = ref(findFirstChildName())

    provide('selected', selected)
    return {
      selected
    }
  }
})
</script>
