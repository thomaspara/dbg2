<template>
    <ul>
        <li><router-link class="menu_brand-name" to="/home">Retail Store</router-link></li>
        <li><router-link class="menu_options" to="/account">Account</router-link></li>
        <li><router-link class="menu_options" to="/shopping-cart"><font-awesome-icon :icon="['fas', 'shopping-cart']" /></router-link></li>
    </ul>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: none;
}

.menu_brand-name {
  float: left;
}
.menu_options {
  float: right;
}

li a {
  display: block;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-left: 20px;
  text-decoration: none;
  font-size: 16px;
}
</style>
