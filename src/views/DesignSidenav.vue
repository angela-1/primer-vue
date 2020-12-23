<template>
  <the-component>
    <template #title> sidenav </template>
    <template #content> 见左边 </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignSidenav',
  components: {
    TheComponent
  }
})
</script>
