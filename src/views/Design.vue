<template>
  <the-component>
    <template #title> 设计 </template>
    <template #content>
      <p>TODO</p>
      <ul>
        <li>编写翻页组件</li>
        <li>可以设置图标组件大小</li>
        <li>可以设置日期范围组件大小</li>
      </ul>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'Design',
  components: {
    TheComponent
  }
})
</script>
