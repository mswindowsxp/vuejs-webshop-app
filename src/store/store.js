import Vue from 'vue'
import Vuex from 'vuex'
import { ProductService } from '../common/product.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: []
  },
  mutations: {
    incrementTest (state) {
      state.tempVal += 1
    },
    SET_PRODUCT_LIST: (state, payload) => {
      state.productList = payload
    }
  },
  actions: {
    FETCH_PRODUCT_LIST: async (context, payload) => {
      const data = await ProductService.getListProduct()
      console.log(data)
      context.commit('SET_PRODUCT_LIST', data)
    }
  },
  modules: {

  },
  getters: {
    GET_PRODUCT_LIST (state) {
      return state.productList
    }
  }
})
