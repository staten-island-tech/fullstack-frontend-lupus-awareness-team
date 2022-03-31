import VueCookies from 'vue-cookies'
// import axios from 'axios'
import Vuex from 'vuex'
import axios from 'axios'

 const HTTP = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: 'Bearer {token}'
    }
})

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
     SET_USER_DATA(state, userData) {
      state.user = userData
      console.log(state.user)
      VueCookies.set('auth-token', state.user, "1h")
    }
  },
  actions: {
    async login({commit}, credentials) {
        const res = await HTTP.post('login', credentials)
        commit('SET_USER_DATA', res.data)
    }
  },
  modules: {
  }
})
