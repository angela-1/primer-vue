<template>
  <li v-if="isCurrent" class="breadcrumb-item" aria-current="page">
    <slot></slot>
  </li>
  <li v-else class="breadcrumb-item">
    <router-link :to="to">
      <slot></slot>
    </router-link>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'PrBreadcrumbItem',
  props: {
    to: {
      type: [String, Object],
      default: ''
    }
  },
  setup(props) {
    const isCurrent = computed<boolean>(() => {
      return props.to === ''
    })
    return {
      isCurrent
    }
  }
})
</script>
