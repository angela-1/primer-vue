<template>
  <div class="flash" :class="'flash-' + type">
    <slot></slot>
    <button
      v-if="closable"
      class="flash-close js-flash-close"
      type="button"
      aria-label="Close"
    >
      <pr-icon name="x"></pr-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AlertType } from './type'
import { PrIcon } from '../icon'

export default defineComponent({
  name: 'PrAlert',
  components: {
    PrIcon
  },
  props: {
    type: {
      type: String as PropType<AlertType>
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
})
</script>
