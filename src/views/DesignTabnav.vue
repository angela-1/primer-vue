<template>
  <the-component>
    <template #title> tabnav </template>
    <template #content>
      <pr-tabnav>
        <pr-tabnav-pane name="sumary" label="概览">
          <design-sumary></design-sumary>
        </pr-tabnav-pane>
        <pr-tabnav-pane name="detail" label="详情">
          <design-detail></design-detail>
        </pr-tabnav-pane>
      </pr-tabnav>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrTabnav } from '../../packages/tabnav'
import { PrTabnavItem } from '../../packages/tabnav-item'
import { PrTabnavPane } from '../../packages/tabnav-pane'
import DesignSumary from './Sumary.vue'
import DesignDetail from './Detail.vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignTabnav',
  components: {
    PrTabnav,
    PrTabnavItem,
    PrTabnavPane,
    DesignSumary,
    DesignDetail,
    TheComponent
  }
})
</script>
