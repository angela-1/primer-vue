import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes
})
