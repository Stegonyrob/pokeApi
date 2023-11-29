import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../store/authStore'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    
    },
  
    {
      path: '/favorite',
      name: 'favorite',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
 
      component: () => import('../views/FavoriteView.vue')
    }
  ]
})
// router.beforeEach((to,from) => {
//   const store = useAuthStore ()
//   if(to.mate.requiresAuth && !store.user.isAuthenticated){
//     return{name:'login'}
//   }
// })

export default router
