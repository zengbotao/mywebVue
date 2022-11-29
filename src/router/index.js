import { createRouter, createWebHashHistory } from 'vue-router'
import defaultRoutes from './default'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue'),
      meta: {
        index: 1
      }
    },
    ...defaultRoutes,
    {
      path: '/category',
      name: 'category',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home/index.vue'),
      meta: {
        index: 2
      }
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name){
    return next()
  }else{
    next('/404');
  }
 
})
export default router