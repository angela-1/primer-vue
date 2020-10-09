<template>
  <section>
    <h2>tab-nav</h2>
    <div>
      <pr-tab-nav>
        <pr-tab-nav-pane name="one" label="测试1">
          <design-sumary></design-sumary>
        </pr-tab-nav-pane>
        <pr-tab-nav-pane name="two" label="测试2">
          <design-detail></design-detail>
        </pr-tab-nav-pane>
      </pr-tab-nav>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrTabNav } from '../../packages/tab-nav'
import { PrTabNavItem } from '../../packages/tab-nav-item'
import { PrTabNavPane } from '../../packages/tab-nav-pane'
import DesignSumary from './Sumary.vue'
import DesignDetail from './Detail.vue'

export default defineComponent({
  name: 'DesignTabNav',
  components: {
    PrTabNav,
    PrTabNavItem,
    PrTabNavPane,
    DesignSumary,
    DesignDetail
  }
})
</script>
