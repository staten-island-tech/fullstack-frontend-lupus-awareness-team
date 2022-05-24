// import VueJwtDecode from "vue-jwt-decode";
import Vuex from "vuex";
import HTTP from "../axiosConfig";

export default new Vuex.Store({
  state: {
    user: null,
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
    async login({ commit }, credentials) {
      try {
        const res = await HTTP.post("login", credentials);
        commit("SET_USER_DATA", res.data);
      } catch (error) {
        console.log(error)
      }
    },
    async checkCookie() {
      try {
        const res = await HTTP.get("auth");
        this.state.user = res.data
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {},
});
