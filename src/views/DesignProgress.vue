<template>
  <the-component>
    <template #title> progress </template>
    <template #content>
      <h2>Default progress</h2>
      <pr-progress :progress="50"></pr-progress>
      <h2>Large progress</h2>
      <pr-progress size="large" :progress="50"></pr-progress>
      <h2>Small progress</h2>
      <pr-progress size="small" :progress="50"></pr-progress>
      <h2>Inline progress</h2>
      <div>
        <span class="text-small text-gray mr-2">4 of 16</span>
        <pr-progress
          size="small"
          :inline="true"
          :width="160"
          :progress="25"
        ></pr-progress>
      </div>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrProgress } from '../../packages/progress'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignProgress',
  components: {
    PrProgress,
    TheComponent
  }
})
</script>
