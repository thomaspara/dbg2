<template>
  <div class="card">
    <h1 class="brand-name">Retail Store</h1>
    <h2 class="page-name">Registration</h2>
    <form action="#">
      <input
        class="form_input"
        type="text"
        v-model="customer.f_name"
        placeholder="First Name"
      />
      <input
        class="form_input"
        type="text"
        v-model="customer.l_name"
        placeholder="Last Name"
      />
      <input class="form_input" type="text" v-model="customer.email" placeholder="Email" />
      <input
        class="form_input"
        type="text"
        v-model="customer.user_password"
        placeholder="Password"
      />
    </form>
    <p class="login-link">Already Registered? <router-link class="router_link" to="/login">Login</router-link></p>
    <router-link to="/home" class="button" @click="register()">Register</router-link>
  </div>
</template>

<script>
/* eslint-disable */
import { RegisterService } from '@/common/api.service.js'
export default {
  name: 'Register',
  data () {
    return {
      customer: {
        f_name: '',
        l_name: '',
        email: '',
        user_password: ''
      }
    }
  },
  methods: {
        async register () { 
            await RegisterService.create({
              f_name: this.customer.f_name,
              l_name: this.customer.l_name,
              email: this.customer.email,
              user_password: this.customer.user_password
            })
            .then((response) => { 
              response.data 
              console.log(response.data)
            })
            .catch(error => {
              throw new Error(error)
            })
        },
  }
}
</script>

<style scoped></style>
