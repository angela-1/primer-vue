import { createRouter, createWebHistory } from 'vue-router'
import Frame from './layouts/Frame.vue'
import Design from './views/Design.vue'

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
      children: [{ path: 'design', name: 'design', component: Design }]
    }
  ]
})
