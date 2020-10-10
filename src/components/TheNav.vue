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
    <template v-for="route in routes" :key="route.name">
      <!-- <pr-side-nav-item :name="route.name" :href="route.path">
        {{ route.meta.title }}
      </pr-side-nav-item> -->

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

  <!-- <pr-side-nav>
    <pr-side-nav-item name="getting-started" href="getting-started">
      开始使用
    </pr-side-nav-item>
    <pr-side-nav-item name="update-log" href="update-log">
      更新日志
    </pr-side-nav-item>
    <pr-side-nav-sub-items name="sub-items" title="组件">
      <pr-side-nav-item name="icons" href="icons"> 图标 Icon </pr-side-nav-item>
      <pr-side-nav-item name="tab-nav" href="tab-nav">
        标签导航 TabNav
      </pr-side-nav-item>
      <pr-side-nav-item name="side-nav" href="side-nav">
        侧边导航 SideNav
      </pr-side-nav-item>
      <pr-side-nav-item name="date-range" href="date-range">
        日期范围 DateRange
      </pr-side-nav-item>
    </pr-side-nav-sub-items>
  </pr-side-nav> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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

    return {
      routes
    }
  }
})
</script>
