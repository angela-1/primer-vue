<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Primer></Primer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Primer from './components/Primer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Primer
  }
}
</script>
