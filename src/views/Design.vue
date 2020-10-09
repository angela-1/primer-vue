<template>
  <div class="p-5">
    <design-side-nav></design-side-nav>
    <design-tab-nav></design-tab-nav>
    <design-icons></design-icons>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import DesignIcons from './DesignIcons.vue'
import DesignTabNav from './DesignTabNav.vue'
import DesignSideNav from './DesignSideNav.vue'

export default defineComponent({
  name: 'Design',
  components: {
    DesignIcons,
    DesignTabNav,
    DesignSideNav
  }
})
</script>

<style lang="scss">
section h2 {
  margin: 16px 0;
}
</style>
