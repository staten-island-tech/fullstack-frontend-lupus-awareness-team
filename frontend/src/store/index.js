import Vue from 'vue'
import Vuex from 'vuex'
import HTTP from '../axiosConfig'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async register({commit}, credentials) {
        const res = await HTTP.post('login', credentials)
        return res.data
    }
  },
  modules: {
  }
})
