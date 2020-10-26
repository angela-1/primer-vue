<template>
  <span :class="progressClass" :style="{ width: progressWidth }">
    <span :class="progressItemClass" :style="{ width: progressValue }"></span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { getSizeSuffix, PrComponentSize } from '../types/component-size'
import { PaginationType, PaginstionModel } from '../types/pagination'

export type ProgressColor = 'green' | 'purple' | 'pink' | 'red' | 'blue'

export default defineComponent({
  name: 'PrProgress',
  props: {
    progress: {
      type: Number,
      default: 0,
      validator: (val: number): boolean => val >= 0 && val <= 100
    },
    size: {
      type: String as PropType<PrComponentSize>,
      default: 'default' as PrComponentSize,
      validator: (val: string): boolean =>
        ['small', 'default', 'large'].includes(val)
    },
    backgroundColor: {
      type: String as PropType<ProgressColor>,
      default: 'green',
      validator: (val: string): boolean =>
        ['green', 'purple', 'pink', 'red', 'blue', ''].includes(val)
    },
    inline: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    }
  },
  setup(props, ctx) {
    const backgroundColorClass = computed(() => {
      return `bg-${props.backgroundColor}`
    })
    const sizeClass = computed(() => {
      const sizeSuffix = getSizeSuffix(props.size)
      return sizeSuffix !== '' ? `Progress--${sizeSuffix}` : null
    })

    const inlineClass = computed(() => {
      return props.inline ? 'd-inline-flex' : ''
    })

    const progressClass = computed(() => {
      const baseClass = 'Progress'
      return [baseClass, sizeClass.value, inlineClass.value]
    })

    const progressItemClass = computed(() => {
      const baseClass = 'Progress-item'
      return [baseClass, backgroundColorClass.value]
    })

    const progressWidth = computed(() => {
      return props.inline ? `${props.width}px` : ''
    })

    const progressValue = computed(() => {
      return `${props.progress}%`
    })

    return {
      progressClass,
      progressItemClass,
      progressWidth,
      progressValue
    }
  }
})
</script>
