import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DashboardAUTH from "../components/DashboardAUTH.vue";
import EventInfo from "../views/EventInfo.vue";
import LoginPageView from "../views/LoginPageView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPageView,
  },
  {
    path: "/event-details",
    name: "EventInfo",
    component: EventInfo,
  },
  {
    path: "/user",
    name: "Dashboard",
    component: DashboardAUTH,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
