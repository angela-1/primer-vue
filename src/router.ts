import { createRouter, createWebHistory } from 'vue-router'
import Frame from './layout/Frame.vue'
import Primer from './components/Primer.vue'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/', redirect: '/components' },
    {
      path: '/components',
      name: 'components',
      component: Frame,
      children: [{ path: 'primer', name: 'primer', component: Primer }]
    }
  ]
})
