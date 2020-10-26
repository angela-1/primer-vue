<template>
  <div ref="btngroup" class="BtnGroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  Component,
  computed,
  defineComponent,
  onMounted,
  PropType,
  provide,
  Ref,
  ref
} from 'vue'
import { PrButton } from '.'
import { PrComponentSize } from '../types/component-size'

export default defineComponent({
  name: 'PrButtonGroup',
  setup(props, ctx) {
    const btngroup: Ref<HTMLElement> = ref(null)

    provide('btn-group', true)

    onMounted(() => {
      const children = btngroup.value.children
      const noGroupItemClass = Array.from(children).filter((v: any) => {
        return v.type !== 'button'
      })
      noGroupItemClass.forEach((v: HTMLElement) => {
        v.classList.add('BtnGroup-parent')
      })
    })

    return {
      btngroup
    }
  }
})
</script>
