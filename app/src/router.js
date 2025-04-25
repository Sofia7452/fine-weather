import { createMemoryHistory, createRouter } from 'vue-router'

import FineWeather from './views/FineWeather.vue'
import LoginHome from './views/LoginHome.vue'

const routes = [
  { path: '/', component: LoginHome },
  { path: '/images', component: FineWeather },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router