<template>
  <div class="tabnav-panes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, Ref } from 'vue'
export default defineComponent({
  name: 'PrTabnavPane',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    }
  }
})
</script>
