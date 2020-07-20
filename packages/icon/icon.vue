<template>
  <span :innerHTML="svg"></span>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, Ref } from 'vue'
import { IconSize, Size } from './type'
import octicons from '@primer/octicons'

export default defineComponent({
  name: 'PrIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number] as PropType<IconSize>,
      default: Size.Small
    }
  },
  setup(props) {
    const svg: Ref<string> = ref('')

    const getSize = (size: string | number): number => {
      let sizeNumber = Size.Small
      if (typeof size === 'string') {
        switch (size) {
          case 'small':
            sizeNumber = Size.Small
            break
          case 'large':
            sizeNumber = Size.Large
            break
          default:
            sizeNumber = Size.Small
            break
        }
      } else {
        sizeNumber = size
      }
      return sizeNumber
    }

    const getSvg = () => {
      return octicons[props.name]?.toSVG({ height: getSize(props.size) })
    }

    svg.value = getSvg()

    return {
      svg
    }
  }
})
</script>
