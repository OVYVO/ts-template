import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
