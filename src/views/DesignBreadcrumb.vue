<template>
  <the-component>
    <template #title> breadcrumb </template>
    <template #content>
      <div>
        <pr-breadcrumb>
          <pr-breadcrumb-item to="/">文档</pr-breadcrumb-item>
          <pr-breadcrumb-item to="/components">组件</pr-breadcrumb-item>
          <pr-breadcrumb-item>面包屑</pr-breadcrumb-item>
        </pr-breadcrumb>
      </div>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'
import { PrBreadcrumb } from '../../packages/breadcrumb'
import { PrBreadcrumbItem } from '../../packages/breadcrumb-item'

export default defineComponent({
  name: 'DesignBreadcrumb',
  components: {
    TheComponent,
    PrBreadcrumb,
    PrBreadcrumbItem
  }
})
</script>
