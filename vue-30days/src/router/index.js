import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/Hello.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/Hello', name: 'Hello', component: Hello},
  ],
})

export default router
