<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div v-for="product in products" :key=product.product_id class="product-card">
            <p>{{ product.product_name }}</p>
            <p>Product Description: {{ product.product_description }}</p>
            <p>Product ID: {{ product.product_id }}</p>
            <p>${{ product.price }}</p>
            <font-awesome-icon @click="addCart()" class="plus-icon" :icon="['fas', 'plus-circle']" />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { ProductService } from '@/common/api.service.js'
export default {
    name: 'Home',
    components: {
        Navbar
    },
    data () {
        return {
            products: [],
        }
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        addCart() {
            alert("Item has been added to cart");
        },
        async fetchProducts () {
            // fetches ALL products in our database
            await ProductService.query()
                .then(({ data }) => {
                    this.products =  data.products
                    // Sets our products[] to the fulfilled promise's products[]
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
    }
};
</script>

<style scoped>
.plus-icon {
    color: #AF38FB;
    cursor: pointer;
    float: right;
    margin-bottom: 1em;
    margin-right: 1em;
    font-size: 1.33em;
}
</style>
