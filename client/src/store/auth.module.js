import ApiService from '@/common/api.service'
import { LOGIN, LOGOUT, REGISTER } from './actions.type'
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from './mutations.type'

const state = {
  error: null,
  customer: {},
  isAuthenticated: ''
}

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  customer_id (state) {
    return state.customer.customer_id
  }
}

const actions = {
  [LOGIN] (context, body) {
    return new Promise(resolve => {
      ApiService.post('/login', {
        customer: body
      })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.customer)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  },
  [REGISTER] (context, body) {
    return new Promise((resolve, reject) => {
      ApiService.post('/register', {
        customer: body
      })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.customer)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
          reject(response)
        })
    })
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, customer) {
    state.isAuthenticated = true
    state.customer = customer
    state.errors = {}
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.customer = {}
    state.errors = {}
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
