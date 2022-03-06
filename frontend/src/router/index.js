import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Callback from "@/views/Callback";
import ErrorPage from "@/views/Error";

import { authenticationGuard } from "@/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    beforeEnter: authenticationGuard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/callback",
    name: "Callback",
    component: Callback,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
