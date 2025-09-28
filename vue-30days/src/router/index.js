import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/Hello.vue'
import Counter from "@/views/Counter.vue";
import TodoApp from "@/views/TodoApp.vue";
import Bindings from "@/views/Bindings.vue";
import ConditionLoop from "@/views/ConditionLoop.vue";
import Components from "@/views/Components.vue";
import ChildComp from "@/views/ChildComp.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/Hello', name: 'Hello', component: Hello},
    {path: '/Counter', name: 'Counter', component: Counter},
    {path: '/TodoApp', name: 'TodoApp', component: TodoApp},
    {path: '/Bindings', name: 'Bindings', component: Bindings},
    {path: '/ConditionLoop', name: 'ConditionLoop', component: ConditionLoop},
    {path: '/Components', name: 'Components', component: Components},
    {path: '/ChildComp', name: 'ChildComp', component: ChildComp},
  ],
})

export default router
