// import VueJwtDecode from "vue-jwt-decode";
import Vuex from "vuex";
import HTTP from "../axiosConfig";

export default new Vuex.Store({
  state: {
    user: null,
    alert: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    },
    SET_ALERT(state, alert) {
      if(!alert.response) {return state.alert = alert}
      state.alert = alert.response
    }
  },
  actions: {
    async CHECK_COOKIE({commit}) {
      try {
        const res = await HTTP.get("auth");
        commit('SET_USER_DATA', res.data)
      } catch (error) {
        this.GET_ALERT(error)
      }
    },
    GET_ALERT({commit}, alert) {
      commit('SET_ALERT', alert)
    }
  },
  modules: {},
});
