<template>
  <the-component>
    <template #title> button </template>
    <template #content>
      <div class="button-container">
        <pr-button>default</pr-button>
        <pr-button type="primary">primary</pr-button>
        <pr-button size="small" type="outline">small outline button</pr-button>
        <pr-button size="large" type="danger">large danger button</pr-button>
      </div>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'
import { PrButton } from '../../packages/button'

export default defineComponent({
  name: 'DesignButton',
  components: {
    TheComponent,
    PrButton
  },
  setup() {}
})
</script>

<style lang="scss" scoped>
.button-container > * {
  margin-right: 8px;
}
</style>
