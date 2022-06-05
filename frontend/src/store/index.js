// import VueJwtDecode from "vue-jwt-decode";
import axios from "axios";
import Vuex from "vuex";
import HTTP from "../axiosConfig";

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    }
  },
  actions: {
    async checkCookie({commit}) {
      try {
        const res = await HTTP.get("auth");
        commit('SET_USER_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async login({commit}, User){
      const res = await HTTP.get('auth')
      await axios.post('login', User)
      await commit('SET_USER_DATA', res.data)
    }
  },
  modules: {},
});
