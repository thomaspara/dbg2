<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div class="card">
            <h1 class="brand-name">Order History</h1>
        </div>
        <div v-for="transaction in transactions" :key=transaction.transaction_id class="product-card">
            <p>Seller: {{ transaction.seller_id }}</p>
            <!--p>{{ transaction.transaction_name }}</p>
            <p>Order Description: {{ transaction.transaction_description }}</p-->
            <font-awesome-icon @click="addCart()" class="plus-icon" :icon="['fas', 'plus-circle']" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { mapGetters } from 'vuex'
import { TransactionService } from '@/common/api.service.js'
export default {
    name: 'Orders',
    components: {
        Navbar
    },
    data () {
        return {
            transactions: [],
        }
    },
    created() {
        this.queryOrders();
    },
    methods: {
        async queryOrders () {
            await TransactionService.query(this.$store.getters.customer_id)
                .then(({ data }) => {
                    // console.log(data)
                    this.transactions =  data.transactions
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
    },
    computed: {
        ...mapGetters([
            'customer_id'
        ])
    }
};
</script>

<style scoped>
</style>
