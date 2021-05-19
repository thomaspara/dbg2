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
      <input
        class="form_input"
        type="text"
        v-model="customer.email"
        placeholder="Email"
      />
      <input
        class="form_input"
        type="password"
        v-model="customer.user_password"
        placeholder="Password"
      />
    </form>
    <p class="login-link">
      *8 characters minimum required and no special characters*
    </p>
    <p class="login-link">
      Already Registered?
      <router-link class="router_link" to="/login">Login</router-link>
    </p>
    <div class="button" @click="register()">Register</div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
import { REGISTER } from '@/store/actions.type'
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
    register () {
      this.$store
        .dispatch(REGISTER, {
          email: this.customer.email,
          user_password: this.customer.user_password,
          f_name: this.customer.f_name,
          l_name: this.customer.l_name
        })
        .then(() => this.$router.push({ name: 'home' }))
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>

<style scoped></style>
