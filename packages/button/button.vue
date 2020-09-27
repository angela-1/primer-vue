<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PrIcon } from '../icon'

export type ButtonType =
  | 'primary'
  | 'danger'
  | 'outline'
  | 'block'
  | 'link'
  | 'invisible'
  | 'octicon'
export type ButtonSize = 'sm' | 'large'

export default defineComponent({
  name: 'PrAlert',
  components: {
    PrIcon
  },
  props: {
    type: {
      type: String as PropType<ButtonType>
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
})
</script>
