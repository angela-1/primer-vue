<template>
  <nav class="subnav" aria-label="Respository">
    <!-- <a class="subnav-item" href="#url" aria-current="page">Item 1</a>
    <a class="subnav-item" href="#url">Item 2</a>
    <a class="subnav-item" href="#url">Item 3</a> -->
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import {
  Component,
  defineComponent,
  Fragment,
  provide,
  ref,
  VNode,
  watchEffect
} from 'vue'
import PrSubnavItem from './subnav-item.vue'
export default defineComponent({
  name: 'PrSubnav',
  components: {
    PrSubnavItem
  },
  emits: ['change'],
  setup(props, ctx) {
    const slots = ctx.slots.default()
    const isFragment = ref(false)

    slots.forEach((v) => {
      console.log('how subnav slots', v)
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
      console.log('find subnav first', element.props)
      return element.props.name
    }

    const selected = ref(findFirstChildName())

    provide('selected', selected)

    watchEffect(() => {
      ctx.emit('change', selected.value)
    })

    return {
      selected
    }
  }
})
</script>
