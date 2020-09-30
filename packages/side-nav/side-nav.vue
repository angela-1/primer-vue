<template>
  <ul class="sidebar-products">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PrSideNav'
})
</script>
