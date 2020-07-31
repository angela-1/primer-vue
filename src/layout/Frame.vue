<template>
  <div class="pr-container">
    <div class="pr-header">
      <the-header></the-header>
    </div>
    <div class="pr-nav">
      <Nav></Nav>
    </div>
    <div class="pr-content p-5">
      <router-view></router-view>
    </div>
    <div class="pr-footer">
      <the-footer></the-footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Primer from '../components/Primer.vue'
import Nav from '../components/Nav.vue'

export default defineComponent({
  name: 'Frame',
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
    HelloWorld,
    Primer,
    Nav
  }
})
</script>

<style lang="scss" scoped>
.pr-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 52.8px auto 20.8px;
  grid-template-areas:
    'header header'
    'nav content'
    'footer footer';

  .pr-header {
    grid-area: header;
  }
  .pr-nav {
    grid-area: nav;
  }
  .pr-content {
    grid-area: content;
  }
  .pr-footer {
    grid-area: footer;
  }
}
</style>
