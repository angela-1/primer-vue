<template>
  <div class="d-flex flex-items-center p-4" style="z-index: 3" id="github-logo">
    <router-link to="/" class="text-white">
      <pr-icon name="mark-github" :size="32"></pr-icon>
    </router-link>
    <router-link
      to="/"
      class="h4-mktg text-white no-underline no-wrap pl-2 flex-auto"
    >
      Primer Vue
    </router-link>
  </div>
  <pr-side-nav>
    <template v-for="route in filterdRoutes" :key="route.name">
      <template v-if="!!route.children">
        <pr-side-nav-sub-items :name="route.name" :title="route.meta.title">
          <pr-side-nav-item
            v-for="child in route.children"
            :key="child.name"
            :name="child.name"
            :to="route.path + '/' + child.path"
          >
            {{ child.meta.title }}
          </pr-side-nav-item>
        </pr-side-nav-sub-items>
      </template>
      <template v-else>
        <pr-side-nav-item :name="route.name" :to="route.path">
          {{ route.meta.title }}
        </pr-side-nav-item>
      </template>
    </template>
  </pr-side-nav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { PrIcon } from '../../packages/icon'
import { PrSideNav } from '../../packages/side-nav'
import { PrSideNavItem } from '../../packages/side-nav-item'
import { PrSideNavSubItems } from '../../packages/side-nav-sub-items'
import { routes } from '../router/routes'
export default defineComponent({
  name: 'TheNav',
  components: {
    PrIcon,
    PrSideNav,
    PrSideNavItem,
    PrSideNavSubItems
  },
  setup() {
    console.log('rts', routes)
    const filterdRoutes = computed(() => {
      return routes.filter((v) => !!v.meta)
    })
    return {
      filterdRoutes
    }
  }
})
</script>
