import VueCookies from "vue-cookies";
import VueJwtDecode from "vue-jwt-decode";
import Vuex from "vuex";
import HTTP from "../axiosConfig";

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      VueCookies.set("auth-token", state.user, "1h");
      const cookie = VueCookies.get("auth-token");
      const userPayload = VueJwtDecode.decode(cookie);
      this.state.user = userPayload;
    },
  },
  actions: {
    checkCookie() {
      const cookie = VueCookies.get("auth-token");
      if (cookie) {
        const userPayload = VueJwtDecode.decode(cookie);
        this.state.user = userPayload;
      }
      console.log(this.state.user);
    },
    async login({ commit }, credentials) {
      const res = await HTTP.post("login", credentials);
      commit("SET_USER_DATA", res.data);
    },
  },
  modules: {},
});
