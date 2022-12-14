/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2022-12-14 10:21:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-14 11:09:45
 */
const nomalRoutes = [
    {
        path: "home",
        name: "home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          index: 1,
        },
      },
      {
        path: "live",
        name: "live",
        component: () => import("@/views/live/index.vue"),
        meta: {
          index: 2,
        },
      },
      {
        path: "learn",
        name: "learn",
        component: () => import("@/views/learn/index.vue"),
        meta: {
          index: 3,
        },
      },
      {
        path: "download",
        name: "download",
        component: () => import("@/views/download/index.vue"),
        meta: {
          index: 4,
        },
      },
      {
        path: "entertainment",
        name: "entertainment",
        component: () => import("@/views/entertainment/index.vue"),
        meta: {
          index: 5,
        },
      },
      {
        path:'404',
        name:'NotFound',
        component:()=> import("@/views/defaut/404.vue")
      },//404等页面的路由
      {
        path:'',
        name:'Found',
        redirect: "/nomal/home",
      },
  ]
  
  
  
  export default nomalRoutes;