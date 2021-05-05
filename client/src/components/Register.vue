<template>
  <div class="card">
    <h1 class="brand-name">Retail Store</h1>
    <h2 class="page-name">Registration</h2>
    <form action="#">
      <input
        class="form_input"
        type="text"
        name="firstname"
        placeholder="First Name"
      />
      <input
        class="form_input"
        type="text"
        name="lastname"
        placeholder="Last Name"
      />
      <input class="form_input" type="text" name="email" placeholder="Email" />
      <input
        class="form_input"
        type="text"
        name="password"
        placeholder="Password"
      />
    </form>
    <p class="login-link">Already Registered? <router-link class="router_link" to="/login">Login</router-link></p>
    <router-link to="/home" class="button" href="#">Register</router-link>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped></style>
