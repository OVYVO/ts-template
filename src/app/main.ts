import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { registerStores } from './store'
import '@/styles/index.css'

export function bootstrap() {
  const app = createApp(App)

  registerStores(app)
  app.use(router)

  app.mount('#app')
}
