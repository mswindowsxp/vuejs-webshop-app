import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempVal: 0
  },
  mutations: {
    incrementTest (state) {
      state.tempVal += 1
    }
  },
  actions: {
    updateTemp: context => {
      context.commit('incrementTest')
    }
  },
  modules: {
  },
  getters: {
    getTest (state) {
      return state.tempVal
    }
  }
})
