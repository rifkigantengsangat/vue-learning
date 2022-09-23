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
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ()=>import ('../Pages/Contact/Contact.vue')
        },
        {
            path: '/:id',
            name: 'details',
            component: ()=>import ('../components/Detail.vue'),
            
        }
    ]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
