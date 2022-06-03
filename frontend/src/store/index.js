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
        // console.log(this.state.user)
        // if(this.state.user != null) {console.log(this.state.user)}
        const res = await HTTP.get("auth");
        this.state.user = res.data
      } catch (error) {
        console.log(error)
      }
      // console.log(this.state.user)
    },
  },
  modules: {},
});
