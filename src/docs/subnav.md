---
title: 'Subnav'
desc: 'Usage of Subnav component'
---

# Subnav

Simple description.

```vue demo
<template>
  <pr-subnav v-model="currentNav" @change="onChange">
    <pr-subnav-item name="doc">文档</pr-subnav-item>
    <pr-subnav-item name="signature">签到表</pr-subnav-item>
    <pr-subnav-item name="nihao">其他</pr-subnav-item>
  </pr-subnav>
  <p>当前选择：{{ currentNav }}</p>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import TheComponent from '../layouts/TheComponent.vue';

export default defineComponent({
  name: 'DesignSubnav',
  components: {
    TheComponent
  },
  setup() {
    const currentNav = ref('doc');
    const onChange = (val: string) => {
      console.log('recive val', val);
    };
    return {
      currentNav,
      onChange
    };
  }
});
</script>
```
