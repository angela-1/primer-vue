<template>
  <div class="p-5">
    <div class="page-header border-bottom mb-5">
      <h1 class="h1 mb-2">
        <slot name="title"></slot>
      </h1>
      <slot name="toolbar"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TheComponent'
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
