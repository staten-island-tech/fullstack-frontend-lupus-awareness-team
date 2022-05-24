// import VueJwtDecode from "vue-jwt-decode";
import Vuex from "vuex";
import HTTP from "../axiosConfig";

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
  },
  actions: {
    async checkCookie() {
      try {
        if(this.state.user != null) return
        const res = await HTTP.get("auth");
        this.state.user = res.data
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {},
});
