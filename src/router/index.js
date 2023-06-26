import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
//import pages from view once they are moved there

const routes = [
    {path: '/', name: 'login', component: LoginPage},
    {path: '/Articles/View/:slug', name: 'ViewPage', component:()=> import('@/components/ViewPage.vue') }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
