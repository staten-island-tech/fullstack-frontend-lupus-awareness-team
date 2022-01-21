import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { domain, clientId, audience } from "../auth_config.json";
import { Auth0Plugin } from "@/auth/auth0-plugin";

// Install the authentication plugin
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

createApp(App).use(store).use(router).mount("#app");
