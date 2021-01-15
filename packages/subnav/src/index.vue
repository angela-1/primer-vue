<template>
  <nav class="subnav" aria-label="Respository">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import {
  Component,
  defineComponent,
  Fragment,
  provide,
  ref,
  VNode,
  watchEffect
} from 'vue';
export default defineComponent({
  name: 'PrSubnav',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  setup(props, ctx) {
    const slots = (ctx.slots.default && ctx.slots.default()) ?? [];

    slots.forEach((v) => {
      console.log('how subnav slots', v);
    });

    // 查找第一个子元素，为了设置默认选择项
    // 递归地查找到第一个子元素
    // v-for还有template在slots里都是一个fragment
    // 所以不能按照平常的情况，直接取第一个子元素
    const firstChild = (vnodes: VNode[]): VNode => {
      let element = vnodes.find((v) => {
        return typeof v.type !== 'symbol';
      });
      if (!element) {
        element = firstChild(vnodes[0].children as VNode[]);
      }
      return element;
    };

    const findFirstChildName = (): string | number => {
      const element = firstChild(slots);
      console.log('find subnav first', element.props);
      return element?.props?.name;
    };

    console.log('get value', props.modelValue);

    const initValue = props.modelValue ?? findFirstChildName();
    const selected = ref(initValue);

    provide('selected', selected);

    watchEffect(() => {
      selected.value = props.modelValue ?? findFirstChildName();
    });

    watchEffect(() => {
      console.log('selected change', selected.value);
      ctx.emit('update:modelValue', selected.value);
    });

    return {
      selected
    };
  }
});
</script>
