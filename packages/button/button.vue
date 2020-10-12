<template>
  <button type="button" :class="btnClass" :aria-disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { PrComponentSize, getSizeSuffix } from '../types/component-size'

export type ButtonType =
  | 'primary'
  | 'danger'
  | 'outline'
  | 'block'
  | 'link'
  | 'invisible'
  | 'octicon'
  | ''

export default defineComponent({
  name: 'PrButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: '' as ButtonType,
      validator: (val: string): boolean =>
        [
          'primary',
          'danger',
          'outline',
          'block',
          'link',
          'invisible',
          'octicon',
          ''
        ].includes(val)
    },
    size: {
      type: String as PropType<PrComponentSize>,
      default: 'default' as PrComponentSize,
      validator: (val: string): boolean =>
        ['small', 'default', 'large'].includes(val)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const btnClass = computed(() => {
      const withOutBtnClassTypes = ['link', 'octicon']
      const classList = ['btn']

      const sizeSuffix = getSizeSuffix(props.size)
      if (sizeSuffix !== '') {
        classList.push(`btn-${sizeSuffix}`)
      }

      if (props.type !== '') {
        const typeClass = `btn-${props.type}`
        classList.push(typeClass)
      }

      if (withOutBtnClassTypes.includes(props.type)) {
        classList.shift()
      }

      return classList.join(' ')
    })
    return {
      btnClass
    }
  }
})
</script>

<style lang="scss">
.btn .icon:only-child {
  margin-right: 0px;
}

.btn > *:not(:first-child) {
  margin-left: 4px;
}
</style>
