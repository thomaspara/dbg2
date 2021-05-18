<template>
  <div class="card">
    <h1 class="brand-name">Retail Store</h1>
    <h2 class="page-name">Login</h2>
    <form action="#">
      <input class="form_input" type="text" v-model="customer.email" name="email" placeholder="Email" />
      <input
        class="form_input"
        type="text"
        name="password"
        placeholder="Password"
        v-model="customer.user_password"
      />
    </form>
    <p class="login-link">
      Don't have an account?
      <router-link class="router_link" to="/register">Register</router-link>
    </p>
    <div class="button" @click="login()">Login</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/store/actions.type'

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
    login () {
      this.$store
        .dispatch(LOGIN, {
          email: this.customer.email,
          user_password: this.customer.user_password
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
