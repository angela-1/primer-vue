<template>
  <a
    class="subnav-item"
    href="javascript:void(0)"
    @click="handleClick"
    :aria-current="activeClass"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from 'vue';
export default defineComponent({
  name: 'PrSubnavItem',
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  setup(props, ctx) {
    const selected: Ref<string | number> = inject('selected') ?? ref('');

    const activeClass = computed(() => {
      return selected.value === props.name ? 'page' : 'false';
    });

    const handleClick = (event: any, navigate: Function) => {
      console.log('click', props.name, selected.value);
      event.preventDefault();
      selected.value = props.name;
    };
    return {
      activeClass,
      handleClick,
      selected
    };
  }
});
</script>
