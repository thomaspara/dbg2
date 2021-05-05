<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div v-for="product in products" :key=product.product_id class="product-card">
            <p>{{ product.product_name }}</p>
            <p>Product ID:{{ product.product_id }}</p>
            <!-- p>{{ product.product_description }}</p -->
            <p>{{ product.seller_id }}</p>
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
            testProducts: [
                {
                    name: 'T-shirt',
                    productId: '001',
                    productSeller: 'Target',
                    price: '5.00'
                },
                {
                    name: 'Shorts',
                    productId: '002',
                    productSeller: 'H&M',
                    price: '7.00'
                },
                {
                    name: 'Pants',
                    productId: '003',
                    productSeller: 'Cotton On',
                    price: '18.00'
                },
                {
                    name: 'Blouse',
                    productId: '004',
                    productSeller: 'Target',
                    price: '5.00'
                },
                {
                    name: 'Shoes',
                    productId: '005',
                    productSeller: 'H&M',
                    price: '7.00'
                },
                {
                    name: 'Shirt',
                    productId: '006',
                    productSeller: 'Cotton On',
                    price: '18.00'
                },
            ]
        }
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        addCart() {
            console.log("Added to cart")
        },
        async fetchProducts () { // fetches ALL products in our database
            await ProductService.query()
                .then(({ data }) => {
                    console.log(data)
                    this.products =  data.products // Sets our products[] to the fulfilled promise's products[]
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
    }
};
</script>

<style scoped>
.span_break {
    display: block;
}
.plus-icon {
    color: #AF38FB;
    cursor: pointer;
}
