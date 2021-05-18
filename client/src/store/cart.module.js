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

export const actions = {
  async [QUERY_CART] (context, customerSlug) {
    const { data } = await CartService.query(customerSlug).then(() => {
      context.commit(SET_CART, data.cart)
      return data
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
