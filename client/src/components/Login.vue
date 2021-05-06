<template>
  <div class="card">
    <h1 class="brand-name">Retail Store</h1>
    <h2 class="page-name">Login</h2>
    <form action="#">
      <input class="form_input" type="text" v-model="customer.email" placeholder="Email" />
      <input
        class="form_input"
        type="text"
        v-model="customer.user_password"
        placeholder="Password"
      />
    </form>
    <p class="login-link">
      Don't have an account?
      <router-link class="router_link" to="/register">Register</router-link>
    </p>
    <router-link to="/home" class="button" @click="login()">Login</router-link>
  </div>
</template>

<script>
import { LoginService } from '@/common/api.service.js'
export default {
  name: 'Login',
  data () {
    return {
      customer: {
        email: '',
        user_password: ''
      }
    }
  },
  methods: {
        async login() { 
            await LoginService.get({
              email: this.customer.email,
              user_password: this.customer.user_password
            })
            .then((response) => { 
              response.data 
              console.log(response.data)
              console.log("it worked")
            })
            .catch(error => {
              throw new Error(error)
            })
        },
  }
}
</script>

<style scoped></style>
