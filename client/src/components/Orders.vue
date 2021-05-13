<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div class="card">
            <h1 class="brand-name">Order History</h1>
        </div>
        <!-- <div v-for="transaction in transactions" :key=transaction.transaction_id class="product-card">
            <p>{{ transaction.transaction_name }}</p>
            <p>Order Description: {{ transaction.transaction_description }}</p>
            <font-awesome-icon @click="addCart()" class="plus-icon" :icon="['fas', 'plus-circle']" />
        </div> -->
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
export default {
    name: 'Orders',
    components: {
        Navbar
    }
};
</script>

<style scoped>
</style>
