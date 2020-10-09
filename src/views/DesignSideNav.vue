<template>
  <the-component>
    <template #title> side-nav </template>
    <template #content> 见左边 </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignSideNav',
  components: {
    TheComponent
  }
})
</script>
