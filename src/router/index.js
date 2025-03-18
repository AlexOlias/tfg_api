import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/registro.vue'
import LoginView from '../pages/login.vue'
import registro from '../pages/registro.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    
    {
      path: '/registrarse',
      name: 'registro',
      component: registro
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

export default router
