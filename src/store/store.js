import Vue from 'vue'
import Vuex from 'vuex'
import { ProductService } from '../common/product.service'
import createPersistedState from 'vuex-persistedstate'
import createMutationsSharer from 'vuex-shared-mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['shopCart']
  }),
  createMutationsSharer({ predicate: ['ADD_SHOP_CART', 'POP_ITEM_IN_CART'] })
  ],
  state: {
    productList: [],
    shopCart: [
      { id: 2, productName: 'P1', priceSale: '5000', priceRoot: '6000', src: 'https://picsum.photos/300/300?random=', salePercent: '10' },
      { id: 1, productName: 'P2', priceSale: '1000', priceRoot: '2000', src: 'https://picsum.photos/300/300?random=', salePercent: '15' }
    ]
  },
  mutations: {
    incrementTest (state) {
      state.tempVal += 1
    },
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
    }
  },
  actions: {
    FETCH_PRODUCT_LIST: async (context) => {
      const data = await ProductService.getListProduct()
      context.commit('SET_PRODUCT_LIST', data)
    },
    ACC_ADD_SHOP_CART: async (context, payload) => {
      context.commit('ADD_SHOP_CART', payload)
    },
    REMOVE_ITEM_CART: async (context, payload) => {
      context.commit('POP_ITEM_IN_CART', payload)
    }
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
