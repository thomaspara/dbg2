<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  padding: 2%;
  margin: 0;
  height: 100vh;
}
body {
  background: linear-gradient(242.72deg, #AF38FB 30.06%, rgba(255, 255, 255, 0) 100%), #4583EE;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
