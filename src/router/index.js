import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    {path: '/', name: 'login', component: LoginPage},
    {path: '/Articles', name: 'Articles', component: ()=> import('@/views/Articles.vue')},
    {path: '/Articles/View', name: 'ViewPage', component:()=> import('@/views/ViewPage.vue')},
    {path: '/Articles/Add', name: 'AddPage', component:()=> import('@/views/AddPage.vue')},
    {path: '/Articles/Edit', name: 'EditPage', component:()=> import('@/views/EditPage.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
