<template>
  <span
    class="IssueLabel label-state"
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
import { defineComponent, PropType } from 'vue'
import { Icon } from '../icon'

export default defineComponent({
  name: 'PrLabel',
  components: {
    'pr-icon': Icon
  },
  props: {
    classes: {
      type: String,
      default: ''
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
})
</script>

<style lang="scss" scoped>
@import '@primer/css/support/index.scss';
.label-state {
  cursor: pointer;
  background-color: $bg-gray;

  &:hover {
    background-color: $gray-200;
  }
}

.checked {
  background-color: $bg-blue-light;
  color: $text-blue;

  &:hover {
    background-color: $blue-100;
  }
}
</style>
