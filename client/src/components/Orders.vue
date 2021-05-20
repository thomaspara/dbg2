<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div class="card">
            <h1 class="brand-name">Order History</h1>
        </div>
        <div v-for="transaction in transactions" :key=transaction.transaction_id class="product-card">
            <p>{{ transaction.product.product_name }}</p>
            <p>Total Cost: ${{ transaction.total_cost }}</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { mapGetters } from 'vuex'
import { TransactionService } from '@/common/api.service.js'
import { ProductService } from '@/common/api.service.js'
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
                .then((res) => {
                    let tempTransactions = []
                    res.data.transactions.forEach(transaction => {
                    this.fetchProduct(transaction.product_id)
                        .then(t => {
                            tempTransactions.push(
                                Object.assign(
                                t.data,
                                {
                                    total_cost: transaction.total_cost
                                })
                            )
                        })
                    })
                    console.log(tempTransactions)
                this.transactions = tempTransactions
            })
        },

        async fetchProduct (product_id) {
            return await ProductService.get(product_id)
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
