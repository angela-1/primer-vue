<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ButtonType } from './type'
import { Icon } from '../icon'

export default defineComponent({
  name: 'PrAlert',
  components: {
    'pr-icon': Icon
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
