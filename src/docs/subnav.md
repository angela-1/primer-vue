---
title: 'Subnav'
desc: 'Usage of Subnav component'
---

# Subnav

Simple description.


```vue demo
<template>
  <pr-subnav @change="onChange">
    <pr-subnav-item name="doc">文档</pr-subnav-item>
    <pr-subnav-item name="signature">签到表</pr-subnav-item>
    <pr-subnav-item name="nihao">其他</pr-subnav-item>
  </pr-subnav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignSubnav',
  components: {
    TheComponent,
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
```
