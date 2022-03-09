// import { createApp } from "vue";
// import App from "./App.vue";
// import "./registerServiceWorker";
// import router from "./router";
// import store from "./store";
// import AOS from "aos";
// import "aos/dist/aos.css";

// // import authConfig from "../auth_config.json";
// import { setupAuth } from "./auth";

// let app = createApp(App).use(store).use(router).use(AOS.init());

// function callbackRedirect(appState) {
//   router.push(appState && appState.targetUrl ? appState.targetUrl : "/");
// }

// // setupAuth(authConfig, callbackRedirect).then((auth) => {
// //   app.use(auth).mount("#app");
// // });
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')