import type { App as VueApp } from "vue"
import { createPinia } from "pinia"

export function registerStores(app: VueApp<Element>) {
  app.use(createPinia())
}
