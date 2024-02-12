import { createRouter, createWebHistory } from 'vue-router'
import { RegisterView, LoginView, HomeView } from '@/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }
  ]
})

export default router
