<template>
  <span class="icon" v-html="svg"></span>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, Ref } from 'vue'
// @ts-ignore
import octicons from '@primer/octicons'

export enum Size {
  Small = 16,
  Large = 24
}

export type IconSize = Size | number

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
      let sizeNumber = Number(size)
      if (isNaN(sizeNumber)) {
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
        }
      }
      return sizeNumber
    }

    const getSvg = () => {
      const height = getSize(props.size)
      console.log('ht', height)

      return octicons[props.name]?.toSVG({ height })
    }

    svg.value = getSvg()

    return {
      svg
    }
  }
})
</script>
