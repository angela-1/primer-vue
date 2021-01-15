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
  <pr-sidenav>
    <ul class="sidebar-categories">
      <template v-for="route in filterdRoutes" :key="route.name">
        <template v-if="!!route.children">
          <ul class="sidebar-categories list-style-none">
            <pr-sidenav-subitems :name="route.name" :title="route.meta.title">
              <pr-sidenav-item
                v-for="child in route.children"
                :key="child.name"
                :name="child.name"
                :to="route.path + '/' + child.path"
              >
                {{ child.meta.title }}
              </pr-sidenav-item>
            </pr-sidenav-subitems>
          </ul>
        </template>
        <template v-else>
          <pr-sidenav-item :name="route.name" :to="route.path">
            {{ route.meta.title }}
          </pr-sidenav-item>
        </template>
      </template>
    </ul>
  </pr-sidenav>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { routes } from '../router/routes';
export default defineComponent({
  name: 'TheNav',
  setup() {
    console.log('rts', routes);
    const filterdRoutes = computed(() => {
      return routes.filter((v) => !!v.meta);
    });
    return {
      filterdRoutes
    };
  }
});
</script>
