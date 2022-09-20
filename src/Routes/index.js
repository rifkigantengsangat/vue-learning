import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../Pages/Home/Home.vue';
  const  routes=[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: ()=>import ('../Pages/About/About.vue')
        }
    ]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
