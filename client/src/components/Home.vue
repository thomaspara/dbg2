<template>
    <div>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: 'Home',
    components: {
        Navbar
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
};
</script>

<style scoped>
</style>
