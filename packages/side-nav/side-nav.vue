<template>
  <ul class="sidebar-products">
    <slot></slot>
  </ul>
  <div class="text-white">{{ selected }}</div>
</template>

<script lang="ts">
import { Component, defineComponent, provide, ref } from 'vue'
import PrSideNavItem from './side-nav-item.vue'
export default defineComponent({
  name: 'PrSideNav',
  components: {
    PrSideNavItem
  },
  setup(props, ctx) {
    const slots = ctx.slots.default()

    slots.forEach((v) => {
      console.log('ts', v.props)
    })

    const selected = ref(slots[0].props.name)

    provide('selected', selected)
    return {
      selected
    }
  }
})
</script>
