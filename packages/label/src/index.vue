<template>
  <span
    :class="[classes, checked ? 'checked' : '']"
    :title="'标签：' + title"
    @click="toggle()"
  >
    <slot></slot>
    <pr-icon
      v-if="closable"
      class="ml-1"
      name="x"
      @click="close($event)"
    ></pr-icon>
    <span v-if="count" class="Counter Counter--gray-light ml-1">
      {{ count }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PrLabel',
  props: {
    classes: {
      type: String,
      default: 'Label'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    title: String,
    count: Number,
    closable: {
      type: Boolean,
      default: false
    }
  }
});
</script>
