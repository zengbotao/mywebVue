import { createRouter, createWebHashHistory } from "vue-router";
import defaultRoutes from "./default";
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home/index.vue"),
      meta: {
        index: 1,
      },
    },
    {
      path: "/live",
      name: "live",
      component: () => import("@/views/live/index.vue"),
      meta: {
        index: 2,
      },
    },
    {
      path: "/learn",
      name: "learn",
      component: () => import("@/views/learn/index.vue"),
      meta: {
        index: 3,
      },
    },
    {
      path: "/download",
      name: "download",
      component: () => import("@/views/download/index.vue"),
      meta: {
        index: 4,
      },
    },
    {
      path: "/entertainment",
      name: "entertainment",
      component: () => import("@/views/entertainment/index.vue"),
      meta: {
        index: 5,
      },
    },
    ...defaultRoutes,
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name) {
    return next();
  } else {
    next("/404");
  }
});
export default router;
