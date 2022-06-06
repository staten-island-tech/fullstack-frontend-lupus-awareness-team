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
    path: "/user/:id",
    name: "User",
    component: function () {
      return import("../views/UserView.vue");
    },
    props: true
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
  {
    path: "/register",
    name: "Register",
    component: function () {
      return import("../views/RegisterPageView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
