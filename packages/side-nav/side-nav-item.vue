<template>
  <li class="sidebar-product" :class="activeClass">
    <router-link :to="href" custom v-slot="{ href, navigate, isActive }">
      <a
        class="pl-4 pr-5 pb-2 f4"
        :href="href"
        @click="handleClick($event, navigate)"
      >
        <slot></slot>
      </a>
    </router-link>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from 'vue'
export default defineComponent({
  name: 'PrSideNavItem',
  props: {
    href: {
      type: [String, Object],
      default: ''
    },
    name: {
      type: String
    }
  },
  setup(props, ctx) {
    const selected: Ref<string> = inject('selected')

    const activeClass = computed(() => {
      console.log('acs', selected.value, props.name)
      return selected.value === props.name ? 'active is-current-page' : ''
    })

    const handleClick = (event: any, navigate: Function) => {
      event.preventDefault()
      console.log('click', props.name)
      selected.value = props.name
      navigate()
    }
    return {
      handleClick,
      activeClass
    }
  }
})
</script>
