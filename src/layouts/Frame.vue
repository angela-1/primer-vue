<template>
  <div class="az-container">
    <header class="az-header">
      <TheHeader></TheHeader>
    </header>
    <aside class="az-nav p-3">
      <TheNav></TheNav>
    </aside>
    <main class="az-content bg-gray p-5">
      <router-view></router-view>
      <footer class="az-footer bg-gray">
        <TheFooter></TheFooter>
      </footer>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNav from '../components/TheNav.vue'
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default defineComponent({
  name: 'frame',
  components: {
    TheNav,
    TheHeader,
    TheFooter
  }
})
</script>

<style lang="scss" scoped>
.az-container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 52px auto;
  grid-template-areas:
    'nav header'
    'nav content';

  .az-header {
    grid-area: header;
  }
  .az-nav {
    height: 100%;
    overflow-y: scroll;
    grid-area: nav;
  }
  .az-content {
    height: 100%;
    overflow-y: scroll;
    grid-area: content;
  }
  .az-footer {
    grid-area: footer;
  }
}
</style>
