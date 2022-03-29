// import Vue from 'vue'
// import axios from 'axios'
import Vuex from 'vuex'
import HTTP from '../axiosConfig'

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
      console.log(userData)
      // localStorage.setItem('user', JSON.stringify(userData))
      // axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
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
