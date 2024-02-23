import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/voluntarios',
      name: 'voluntarios',
      component: () => import('../views/VoluntariosView.vue')
    },
    {
      path: '/crear-voluntarios',
      name: 'crear-voluntarios',
      component: () => import('../views/CrearVoluntariosView.vue')
    },
    {
      path: '/editar-voluntarios/:id',
      name: 'editar-voluntarios',
      component: () => import('../views/EditarVoluntarioView.vue')
    }
    
  ]
})

export default router
