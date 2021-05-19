import { CartService } from '@/common/api.service'
import { QUERY_CART } from './actions.type'
import { SET_CART } from './mutations.type'

const state = {
  cart: [],
  isLoading: true
}

const getters = {
  cart (state) {
    return state.cart
  },
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
  async [QUERY_CART] (context, customerSlug) {
    await CartService.query(customerSlug).then(res => {
      context.commit(SET_CART, res.data.cart)
      return res.data
    })
  }
}

const mutations = {
  [SET_CART] (state, cart) {
    state.cart = cart
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
