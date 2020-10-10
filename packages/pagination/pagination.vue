<template>
  <nav class="paginate-container" aria-label="Pagination">
    <div class="pagination">
      <span class="previous_page" aria-disabled="true"> 上一页 </span>
      <em aria-current="page">1</em>
      <a href="#url" aria-label="Page 2">2</a>
      <a href="#url" aria-label="Page 3">3</a>
      <span class="gap">…</span>
      <a href="#url" aria-label="Page 8">8</a>
      <a href="#url" aria-label="Page 9">9</a>
      <a href="#url" aria-label="Page 10">10</a>
      <a class="next_page" rel="next" href="#url" aria-label="Next Page">
        下一页
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PrPagination'
})
</script>
