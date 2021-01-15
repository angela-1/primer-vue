<template>
  <button type="button" :class="btnClass" :aria-disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType } from 'vue'
import { PrComponentSize, getSizeSuffix } from '../../types/component-size'

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
  setup(props) {
    const isGroup = inject('btn-group', false)

    const sizeClass = computed(() => {
      const sizeSuffix = getSizeSuffix(props.size, 'button')
      return sizeSuffix !== '' ? `btn-${sizeSuffix}` : ''
    })

    const typeClass = computed(() => {
      return props.type !== '' ? `btn-${props.type}` : ''
    })

    const groupItemClass = computed(() => {
      return isGroup ? 'BtnGroup-item' : ''
    })

    const btnClass = computed(() => {
      const withOutBtnClassTypes = ['link', 'octicon']
      const classList = ['btn']

      classList.push(sizeClass.value)
      classList.push(typeClass.value)
      classList.push(groupItemClass.value)

      const result = classList.filter((v) => v)

      if (withOutBtnClassTypes.includes(props.type)) {
        result.shift()
      }
      return result.join(' ')
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

.btn .icon {
  margin-right: 6px;
}

.btn .dropdown-caret {
  margin-left: 8px !important;
}
</style>
