import Vue from 'vue'
import Vuex from 'vuex'
import { ProductService } from '../common/product.service'
import createPersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'
import Cookies from 'vue-cookies'

import app from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false, domain: `.${window.location.hostname}` }),
      removeItem: key => Cookies.remove(key)
    },
    paths: ['productList']
  }),
  createMutationsSharer({ predicate: ['ADD_SHOP_CART', 'POP_ITEM_IN_CART'] })
  ],
  state: {
    productList: [],
    shopCart: []
  },
  mutations: {
    // ---------PRODUCT - CART ------------ //
    SET_PRODUCT_LIST: (state, payload) => {
      state.productList = payload
    },
    ADD_SHOP_CART: (state, payload) => {
      state.shopCart.push(payload)
    },
    POP_ITEM_IN_CART: (state, payload) => {
      if (state.shopCart.length === 0) {
        alert('shop cart is empty')
      } else {
        const indexRemove = state.shopCart.map(function (item) {
          return item.id
        }).indexOf(payload)
        state.shopCart.splice(indexRemove, 1)
      }
    },
    // ---------SET LANGUAGE------------ //
    SET_LANG: (state, payload) => {
      app.$i18n.locale = payload
    }
    // ---------USER - TOKEN------------ //
  },
  actions: {
    // ---------PRODUCT - CART ------------ //
    FETCH_PRODUCT_LIST: async (context) => {
      const data = await ProductService.getListProduct()
      context.commit('SET_PRODUCT_LIST', data)
    },
    ACC_ADD_SHOP_CART: async (context, payload) => {
      context.commit('ADD_SHOP_CART', payload)
    },
    REMOVE_ITEM_CART: async (context, payload) => {
      context.commit('POP_ITEM_IN_CART', payload)
    },

    // ---------SET LANGUAGE------------ //
    UPDATE_LANG: ({ commit }, payload) => {
      commit('SET_LANG', payload)
    }

    // ---------USER - TOKEN------------ //
    //  LOGIN: async
  },
  modules: {

  },
  getters: {
    GET_PRODUCT_LIST (state) {
      return state.productList
    },
    GET_SHOP_CART (state) {
      return state.shopCart
    },
    /**
     * @return {number}
     */
    GET_SHOP_CART_SIZE (state) {
      return state.shopCart.length
    }
  }
})
