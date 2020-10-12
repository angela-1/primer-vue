<template>
  <the-component>
    <template #title> pagination </template>
    <template #content>
      <h2>Basic example</h2>
      <pr-pagination :page-count="15" :current-page="2"></pr-pagination>

      <h2>Customizing which pages are shown</h2>
      <pr-pagination
        :page-count="20"
        :current-page="10"
        :margin-page-count="2"
        :surrounding-page-count="1"
      ></pr-pagination>

      <h2>Previous/next pagination</h2>
      Current page: {{ page }} / {{ pageCount }}
      <pr-pagination
        :page-count="10"
        :show-pages="false"
        @page-change="pageChange"
      ></pr-pagination>
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
  setup() {
    const pager = reactive({
      page: 1,
      pageCount: 10
    })
    const pageChange = (val: number) => {
      console.log('recive page', val)
      pager.page = val
    }
    return {
      ...toRefs(pager),
      pageChange
    }
  }
})
</script>
