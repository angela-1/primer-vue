<template>
  <li class="sidebar-product">
    <a href="/" class="pl-4 pr-5 pb-1 f4">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PrSideNavItem'
})
</script>
