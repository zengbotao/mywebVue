/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-11-28 16:20:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-14 10:52:52
 */
import { createRouter, createWebHashHistory } from "vue-router";
import nomal from "@/layout/nomal.vue"
import nomalRoutes from "./nomal";


const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      redirect: "/nomal",
    },
    {
      path: "/nomal",
      name: "nomal",
      component: nomal,
      children:nomalRoutes //主页等信息的路由，旁边有留白和头部尾部
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name) {
    return next();
  } else {
    next("/nomal/404");
  }
});
export default router;
