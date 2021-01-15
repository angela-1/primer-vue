<template>
  <div class="tabnav-tab cursor-pointer">
    {{ label }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, Ref } from 'vue'
export default defineComponent({
  name: 'PrTabnavItem',
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
