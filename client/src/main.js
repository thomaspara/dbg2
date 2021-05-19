// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faPlusCircle, faTshirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ApiService from './common/api.service'
import store from './store'
import './assets/styles/app.css'

library.add(faShoppingCart, faPlusCircle, faTshirt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

ApiService.init()

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
