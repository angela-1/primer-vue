<template>
  <div class="tabnav">
    <nav class="tabnav-tabs">
      <pr-tabnav-item
        v-for="item in tabNavItems"
        :key="item.name"
        :name="item.name"
        :label="item.label"
        @click="submit(item.name)"
        :aria-current="item.name === selected ? 'page' : 'false'"
      ></pr-tabnav-item>
    </nav>
  </div>
  <component :is="current" :key="current.props.name"></component>
</template>

<script lang="ts">
import { Component, computed, defineComponent, h, ref, Slots, VNode } from 'vue'
import PrTabnavItem from './tabnav-item.vue'
import PrTabnavPane from './tabnav-pane.vue'
export default defineComponent({
  name: 'PrTabnav',
  components: {
    PrTabnavItem
  },
  emits: ['update:selected'],
  setup(props, ctx) {
    const slots = ctx.slots.default()
    slots.forEach((pane) => {
      if ((pane.type as Component).name !== PrTabnavPane.name) {
        throw new Error('pr-tabnav 子标签必须是 pr-tabnav-pane')
      }
    })

    const selected = ref(slots[0].props.name)

    const tabNavItems = computed(() => {
      return slots.map((v) => v.props)
    })

    const submit = (val: string) => {
      selected.value = val
      ctx.emit('update:selected', val)
    }

    const current = computed(() => {
      return slots.find((v) => v.props.name === selected.value)
    })

    return {
      tabNavItems,
      selected,
      submit,
      current
    }
  }
})
</script>
<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}
</style>
