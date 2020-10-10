import { createRouter, createWebHistory } from 'vue-router'
import Design from './views/Design.vue'
import DesignIcons from './views/DesignIcons.vue'
import DesignTabNav from './views/DesignTabNav.vue'
import DesignSideNav from './views/DesignSideNav.vue'
import GettingStarted from './views/GettingStarted.vue'
import UpdateLog from './views/UpdateLog.vue'
import DesignDateRange from './views/DesignDateRange.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/', redirect: '/design' },
    {
      path: '/design',
      name: 'design',
      component: Design
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      component: GettingStarted
    },
    {
      path: '/update-log',
      name: 'update-log',
      component: UpdateLog
    },
    {
      path: '/icons',
      name: 'icons',
      component: DesignIcons
    },
    {
      path: '/tab-nav',
      name: 'tab-nav',
      component: DesignTabNav
    },
    {
      path: '/side-nav',
      name: 'side-nav',
      component: DesignSideNav
    },
    {
      path: '/date-range',
      name: 'date-range',
      component: DesignDateRange
    }
  ]
})
