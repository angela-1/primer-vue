<template>
  <Frame></Frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Frame from './layout/Frame.vue'

export default defineComponent({
  name: 'App',
  components: {
    Frame
  }
})
</script>

<style lang="scss">
@import '@primer/css/dist/primer.css';
</style>
