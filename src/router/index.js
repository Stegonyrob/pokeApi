import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import LoginView from '../views/LoginView.vue'

import { useAuthStore } from '../stores/auth.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  

    {
      path: '/favorite',
      name: 'favorite',
      component:FavoriteView,
     meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }

  ]
})

router.beforeEach( (to,from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return { name: 'login'}
  }
})

export default router
