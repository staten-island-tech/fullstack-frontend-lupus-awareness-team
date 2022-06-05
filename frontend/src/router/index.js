import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import EventInfo from "../views/EventInfo.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: function () {
      return import("../views/About.vue");
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: function () {
      return import("../views/LoginPageView.vue");
    },
  },
  {
    path: "/event-details",
    name: "EventInfo",
    component: EventInfo,
  },
  // {
  //   path: "/user",
  //   name: "Dashboard",
  //   component: DashboardAUTH,
  // },
  // {
  //   path: "/register",
  //   name: "Dashboard",
  //   component: RegisterPageView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
