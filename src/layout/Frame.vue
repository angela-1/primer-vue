<template>
  <the-header></the-header>
  <main>
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container-lg p-5">
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
      <Primer></Primer>
    </div>
  </main>
  <the-footer></the-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Primer from '../components/Primer.vue'

export default defineComponent({
  name: 'Frame',
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
    HelloWorld,
    Primer
  }
})
</script>
