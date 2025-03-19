import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/registro.vue'
import LoginView from '../pages/login.vue'
import registro from '../pages/registro.vue'
import crearCita from '../pages/crearCita.vue'
import VerCitas from '../pages/verCitas.vue'


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
    {
      path: '/crearCitas',
      name: 'crearCitas',
      component: crearCita,
    },
    {
      path: '/verCitas',
      name: 'verCitas',
      component: VerCitas,
    },
  ],
})

export default router
