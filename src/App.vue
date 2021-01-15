<template>
  <the-frame></the-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheFrame from './layouts/TheFrame.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheFrame
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>