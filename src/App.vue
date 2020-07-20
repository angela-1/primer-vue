<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container-lg p-5">
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <Primer></Primer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Primer from './components/Primer.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Primer
  }
})
</script>

<style lang="scss">
@import '@primer/css/dist/primer.css';
</style>
