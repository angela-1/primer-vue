<template>
  <div
    class="tabnav-tab cursor-pointer"
    :aria-current="isCurrent"
    @click="submit"
  >
    {{ label }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, Ref } from 'vue'
export default defineComponent({
  name: 'PrTabNavItem',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    }
  },
  setup(props, ctx) {
    const parent: Ref<any> = inject('parent')

    const isCurrent = computed(() => {
      console.log('ic', props.name, parent.value)

      return props.name === parent.value.items[parent.value.active]
        ? 'page'
        : 'false'
    })

    const getSelectIndex = (href) => {
      return parent.value.items.indexOf(href)
    }
    onMounted(() => {
      parent.value.items.push(props.name)
    })

    const submit = () => {
      const active = getSelectIndex(props.name)
      console.log('submit', active, props.name)
      parent.value.active = active
    }
    return {
      submit,
      isCurrent
    }
  }
})
</script>
