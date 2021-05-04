<template>
    <div class="card">
        <h1 class="brand-name">Retail Store</h1>
        <h2 class="page-name">Login</h2>
        <form action="#">
        <input class="form_input" type="text" name="email" placeholder="Email">
        <input class="form_input" type="text" name="password" placeholder="Password">
        </form>
        <p class="login-link">Don't have an account? <a href="#">Register</a></p>
        <div class="button">Login</div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    }
};
</script>

<style scoped>
</style>
