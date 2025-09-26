import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/Hello.vue'
import Counter from "@/views/Counter.vue";
import TodoApp from "@/views/TodoApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/Hello', name: 'Hello', component: Hello},
    {path: '/Counter', name: 'Counter', component: Counter},
    {path: '/TodoApp', name: 'TodoApp', component: TodoApp},
  ],
})

export default router
