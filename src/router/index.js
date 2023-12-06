import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    
    },

    {
      path: '/favorites',
      name: 'favorites',
      component:FavoritesView,
     meta: {requiresAuth: true}
    }
  ]
})
router.beforeEach((to,from) => {
  
  if(to.meta.requiresAuth ){
    return{name:'login'}
  }
})

export default router
