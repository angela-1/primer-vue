<template>
  <the-frame></the-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheFrame from './layouts/TheFrame.vue'

export default defineComponent({
  name: 'App',
  components: { TheFrame }
})
</script>

<style lang="scss">
@import '@primer/css/dist/primer.css';
</style>
