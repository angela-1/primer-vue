import { createRouter, createWebHistory } from 'vue-router'
import Design from './views/Design.vue'

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
    }
  ]
})
