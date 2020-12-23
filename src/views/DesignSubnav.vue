<template>
  <the-component>
    <template #title> subnav </template>
    <template #content>
      <pr-subnav @change="onChange">
        <pr-subnav-item name="doc">文档</pr-subnav-item>
        <pr-subnav-item name="signature">签到表</pr-subnav-item>
        <pr-subnav-item name="nihao">其他</pr-subnav-item>
      </pr-subnav>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'
import { PrSubnav } from '../../packages/subnav'
import { PrSubnavItem } from '../../packages/subnav-item'

export default defineComponent({
  name: 'DesignSubnav',
  components: {
    TheComponent,
    PrSubnav,
    PrSubnavItem
  },
  setup() {
    const onChange = (val: string) => {
      console.log('recive val', val)
    }
    return {
      onChange
    }
  }
})
</script>
