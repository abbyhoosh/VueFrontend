import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
//import pages from view once they are moved there

const routes = [
    {path: '/', name: 'login', component: LoginPage},
    {path: '/Articles', name: 'Articles', component: ()=> import('@/views/Articles.vue')},
    {path: '/Articles/View/:slug', name: 'ViewPage', component:()=> import('@/views/ViewPage.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
