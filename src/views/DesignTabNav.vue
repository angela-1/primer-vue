<template>
  <the-component>
    <template #title> tab-nav </template>
    <template #content>
      <pr-tab-nav>
        <pr-tab-nav-pane name="sumary" label="概览">
          <design-sumary></design-sumary>
        </pr-tab-nav-pane>
        <pr-tab-nav-pane name="detail" label="详情">
          <design-detail></design-detail>
        </pr-tab-nav-pane>
      </pr-tab-nav>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrTabNav } from '../../packages/tab-nav'
import { PrTabNavItem } from '../../packages/tab-nav-item'
import { PrTabNavPane } from '../../packages/tab-nav-pane'
import DesignSumary from './Sumary.vue'
import DesignDetail from './Detail.vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignTabNav',
  components: {
    PrTabNav,
    PrTabNavItem,
    PrTabNavPane,
    DesignSumary,
    DesignDetail,
    TheComponent
  }
})
</script>
