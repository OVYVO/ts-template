import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./modules"

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
