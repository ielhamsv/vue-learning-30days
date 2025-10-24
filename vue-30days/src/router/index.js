import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../views/Hello.vue'
import Counter from "@/views/Counter.vue";
import TodoApp from "@/views/TodoApp.vue";
import Bindings from "@/views/Bindings.vue";
import ConditionLoop from "@/views/ConditionLoop.vue";
import Components from "@/views/Components.vue";
import Emitter from "@/views/Emitter.vue";
import ComputedWatch from "@/views/ComputedWatch.vue";
import Slots from "@/views/Slots.vue";
import miniProject1 from "@/views/miniProject1.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import VueRouterBasics from "@/views/VueRouterBasics.vue";
import NestedRoutes from "@/views/NestedRoutes.vue";
import DynamicParams from "@/views/DynamicParams.vue";
import MiniProject2 from "@/views/MiniProject2.vue";
import Post from "@/components/Post.vue";
import piniaBasics from "@/views/piniaBasics.vue"
import PiniaActions from "@/views/PiniaActions.vue";
import PiniaGetters from "@/views/PiniaGetters.vue";
import FetchAPIGet from "@/views/FetchAPIGet.vue";
import FetchAPIPost from "@/views/FetchAPIPost.vue";
import PiniaAPI from "@/views/PiniaAPI.vue";
import miniProject3 from "@/views/MiniProject3.vue"
import CRUDProject from "@/views/CRUDProject.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/Hello', name: 'Hello', component: Hello},
    {path: '/Counter', name: 'Counter', component: Counter},
    {path: '/TodoApp', name: 'TodoApp', component: TodoApp},
    {path: '/Bindings', name: 'Bindings', component: Bindings},
    {path: '/ConditionLoop', name: 'ConditionLoop', component: ConditionLoop},
    {path: '/Components', name: 'Components', component: Components},
    {path: '/Emitter', name: 'Emitter', component: Emitter},
    {path: '/ComputedWatch', name: 'ComputedWatch', component: ComputedWatch},
    {path: '/Slots', name: 'Slots', component: Slots},
    {path: '/miniProject1', name: 'miniProject1', component: miniProject1},
    {path: '/VueRouterBasics/Home', name: 'Home', component: Home},
    {path: '/VueRouterBasics/About', name: 'About', component: About},
    {path: '/VueRouterBasics', name: 'VueRouterBasics', component: VueRouterBasics},
    {path: '/NestedRoutes', name: 'NestedRoutes', component: NestedRoutes, children : [
        {path: 'About', component:About},
        {path: 'Home', component:Home}
      ]},
    {path: '/DynamicParams', name: 'DynamicParams', component: DynamicParams},
    {path: '/users/:id', component: DynamicParams},
    {path: '/MiniProject2', name:'/MiniProject2',component: MiniProject2},
    {path: '/MiniProject2/post/:id',component:Post},
    {path: '/piniaBasics', name: 'piniaBasics', component: piniaBasics},
    {path: '/PiniaActions', name: 'PiniaActions', component: PiniaActions},
    {path: '/PiniaGetters', name: 'PiniaGetters', component: PiniaGetters},
    {path: '/FetchAPIGet', name: 'FetchAPIGet', component: FetchAPIGet},
    {path: '/FetchAPIPOST', name: 'FetchAPIPOST', component: FetchAPIPost},
    {path: '/PiniaAPI', name: 'PiniaAPI', component: PiniaAPI},
    {path: '/miniProject3', name: 'miniProject3', component: miniProject3},
    {path: '/CRUDProject', name: 'CRUDProject', component: CRUDProject},
  ],
})

export default router
