<template>
  <div class="card">
    <h1 class="brand-name">Retail Store</h1>
    <h2 class="page-name">Registration</h2>
    <form action="#">
      <input class="form_input" type="text" name="firstname" placeholder="First Name">
      <input class="form_input" type="text" name="lastname" placeholder="Last Name">
      <input class="form_input" type="text" name="email" placeholder="Email">
      <input class="form_input" type="text" name="password" placeholder="Password">
    </form>
    <p class="login-link">Already Registered? <a href="#">Login</a></p>
    <div class="button" href="#">Register</div>
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
};
</script>

<style scoped>
</style>
