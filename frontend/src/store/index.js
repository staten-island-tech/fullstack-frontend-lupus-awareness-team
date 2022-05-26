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
      console.log(this.state.user)
      try {
        if(this.state.user != null) return
        const res = await HTTP.get("auth");
        console.log(res)
        this.state.user = res.data
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {},
});
