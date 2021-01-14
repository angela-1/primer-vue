<template>
  <div ref="btngroup" class="BtnGroup">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, ref } from 'vue';

export default defineComponent({
  name: 'PrButtonGroup',
  setup() {
    const btngroup = ref<HTMLElement | null>(null);

    provide('btn-group', true);

    onMounted(() => {
      const children = btngroup.value?.children ?? [];
      const noGroupItemClass = Array.from(children).filter((v: any) => {
        return v.type !== 'button';
      });
      noGroupItemClass.forEach((v: Element) => {
        v.classList.add('BtnGroup-parent');
      });
    });

    return {
      btngroup,
    };
  },
});
</script>
