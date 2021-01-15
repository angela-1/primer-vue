<template>
  <div class="sidebar d-lg-block">
    <!-- <the-nav></the-nav> -->
  </div>
  <main class="width-full">
    <router-link to="/">go home</router-link>
    <router-view></router-view>
    <the-footer></the-footer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNav from '../components/TheNav.vue'
import TheFooter from '../components/TheFooter.vue'
export default defineComponent({
  name: 'TheFrame',
  components: {
    TheNav,
    TheFooter
  }
})
</script>
