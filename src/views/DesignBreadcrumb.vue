<template>
  <the-component>
    <template #title> breadcrumb </template>
    <template #content> </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignBreadcrumb',
  components: {
    TheComponent
  }
})
</script>
