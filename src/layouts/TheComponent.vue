<template>
  <div class="page-header border-bottom py-2 px-5">
    <h2 class="h2 mb-2">
      <slot name="title"></slot>
    </h2>
    <slot name="toolbar"></slot>
  </div>
  <div class="p-5">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ThePage'
})
</script>

<style lang="scss" scoped>
.page-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
}
</style>
