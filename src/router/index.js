import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/register.vue')
  },
  {
    path: '/home',
    name: 'about',
    component: () => import('../views/home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/merchandise/list.vue')
  },
  {
    path: '/info',
    name: 'Detail',
    component: () => import('@/views/merchandise/info.vue')
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import('@/views/shoppingCart.vue')
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: () => import('@/views/userProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
