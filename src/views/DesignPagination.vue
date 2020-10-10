<template>
  <the-component>
    <template #title> pagination </template>
    <template #content>
      <pr-pagination></pr-pagination>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'
import { PrPagination } from '../../packages/pagination'

export default defineComponent({
  name: 'DesignPagination',
  components: {
    TheComponent,
    PrPagination
  },
  setup() {}
})
</script>

<style lang="scss">
section h2 {
  margin: 16px 0;
}
</style>
