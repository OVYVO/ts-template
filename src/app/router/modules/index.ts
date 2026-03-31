import type { RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/modules/home/index.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/modules/common/views/NotFoundView.vue")
  }
]
