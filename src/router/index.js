import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/products',
    component: () => import('../views/home.vue'),
    children: [
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
  },
  {
    path: '/loginRegister',
    name: 'loginRegister',
    component: () => import('../views/login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.isLogin;
  if (!isLoggedIn && to.name !== 'loginRegister') {
    // 用户未登录，跳转到登录页面
    next('/loginRegister');
  } else {
    // 用户已登录，允许访问
    next();
  }

});
export default router
