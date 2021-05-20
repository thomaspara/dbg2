import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  query (resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  put (resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  }
}

export default ApiService

export const ProductService = {
  get (slug) {
    return ApiService.get(`product/${slug}`)
  },
  create (body) {
    return ApiService.post('product/create', { product: body })
  },
  query (type, params) {
    return ApiService.query('product/query', {
      params: params
    })
  }
}

export const CartService = {
  get (slug) {
    return ApiService.get(`cart/${slug}`)
  },
  create (body) {
    return ApiService.post('cart/create', { cart: body })
  },
  query (slug) {
    return ApiService.query(`cart/query/${slug}`)
  },
  delete (slug) {
    return ApiService.delete(`cart/delete/${slug}`)
  }
}

export const TransactionService = {
  get (slug) {
    return ApiService.get(`transaction/${slug}`)
  },
  create (body) {
    return ApiService.post('transaction/create', { transaction: body })
  },
  query (slug) {
    return ApiService.query(`transaction/query/${slug}`)
  }
}

export const SellerService = {
  get (slug) {
    return ApiService.get(`seller/${slug}`)
  },
  create (body) {
    return ApiService.post('seller/create', { seller: body })
  }
}

export const AuthenticationService = {
  create (body) {
    return ApiService.post('/register', { customer: body })
  },

  login (body) {
    return ApiService.post('/login', { customer: body })
  },

  get (slug) {
    return ApiService.get(`customer/${slug}`)
  },

  put (slug, body) {
    return ApiService.put(`/customer/edit/${slug}`, { customer: body })
  }
}

export const BillingService = {
  query (slug) {
    return ApiService.query(`billinginfo/query/${slug}`)
  }
  // put (slug, body) {
  //   return ApiService.put(`/billinginfo/edit/${slug}`, { billingInfo: body })
  // }
}
