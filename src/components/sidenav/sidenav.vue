<template>
  <ul class="sidebar-products">
    <slot></slot>
  </ul>
  <div class="text-white">{{ selected }}</div>
</template>

<script lang="ts">
import { Component, defineComponent, Fragment, provide, ref, VNode } from 'vue'
import PrSidenavItem from './sidenav-item.vue'
export default defineComponent({
  name: 'PrSidenav',
  components: {
    PrSidenavItem
  },
  setup(props, ctx) {
    const slots = ctx.slots.default()
    const isFragment = ref(false)

    slots.forEach((v) => {
      console.log('how much slots', v)
    })

    // 查找第一个子元素，为了设置默认选择项
    // 递归地查找到第一个子元素
    // v-for还有template在slots里都是一个fragment
    // 所以不能按照平常的情况，直接取第一个子元素
    const firstChild = (vnodes: VNode[]): VNode => {
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
      console.log('find first', element.props)
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
