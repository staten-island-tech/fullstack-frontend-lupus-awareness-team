import VueCookies from "vue-cookies";
// import VueJwtDecode from "vue-jwt-decode";
import Vuex from "vuex";
import HTTP from "../axiosConfig";

export default new Vuex.Store({
  state: {
    user: null,
    cookie: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      console.log(state.user)
      // VueCookies.set("auth-token", state.user, "1h");
      // const cookie = VueCookies.get("auth-token");
      // this.state.cookie = cookie
      // const userPayload = VueJwtDecode.decode(cookie);
      // this.state.user = userPayload;
    },
  },
  actions: {
    checkCookie() {
      const cookie = VueCookies.get("auth-token");
      console.log(cookie)
      // if (cookie) {
      //   const userPayload = VueJwtDecode.decode(cookie);
      //   this.state.user = userPayload;
      // }
      // console.log(this.state.user);
    },
    async login({ commit }, credentials) {
      const res = await HTTP.post("login", credentials);
      console.log(res)
      commit("SET_USER_DATA", res.data);
    },
  },
  modules: {},
});
