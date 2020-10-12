<template>
  <div class="BtnGroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from 'vue'
import { PrComponentSize, getSizeSuffix } from '../types/component-size'

export default defineComponent({
  name: 'PrButtonGroup',
  setup() {
    provide('btn-group', true)
  }
})
</script>
