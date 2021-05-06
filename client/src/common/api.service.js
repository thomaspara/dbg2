import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
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

export const LoginService = {
  get (slug) {
    return ApiService.get(`login/${slug}`)
  },
}

export const ProductService = {
  query (type, params) {
    return ApiService.query('product/query', {
      params: params
    })
  },
  get (slug) {
    return ApiService.get(`product/${slug}`)
  },
  create (body) {
    return ApiService.post('product/create', { product: body })
  }
}

export const SellerService = {
  get (slug) {
    return ApiService.get(`seller/${slug}`)
  },
  create (body) {
    return ApiService.post('seller/create', { product: body })
  }
}

export const RegisterService = {
  create (body) {
    return ApiService.post('/register', { customer: body })
  }
}
