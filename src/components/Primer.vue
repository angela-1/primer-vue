<template>
  <pr-icon></pr-icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '../../packages/icon'

export default defineComponent({
  name: 'Primer',
  components: {
    'pr-icon': Icon
  }
})
</script>
