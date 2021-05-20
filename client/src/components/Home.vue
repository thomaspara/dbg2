<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div v-for="product in products" :key=product.product_id class="product-card">
            <font-awesome-icon class="product-icon" :icon="['fas', 'tshirt']"/>
            <h2 class="product-name">{{ product.product_name }}</h2>
            <p>Product Description: {{ product.product_description }}</p>
            <p>Product ID: {{ product.product_id }}</p>
            <p>Seller: {{ product.seller.seller_name }}</p>
            <div class="sub-card">
                <p class="product-price">${{ product.price }}</p>
                <font-awesome-icon @click="addCart(product)" class="plus-icon" :icon="['fas', 'plus-circle']" />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { ProductService } from '@/common/api.service.js'
import { SellerService } from '@/common/api.service.js'
import { CartService } from '@/common/api.service.js'
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
        async addCart(product) {
            await CartService.create({
                product_id: product.product_id,
                customer_id: this.$store.getters.customer_id,
                quantity: 1
            }).then((res) => {
                console.log(res)
                alert("Product has been added to cart")
            })
            .catch(error => {
                throw new Error(error)
            })
        },
        async fetchProducts () {
            // fetches ALL products in our database
            await ProductService.query()
                .then((res) => {
                    var tempProducts = []
                    res.data.products.forEach(product => {
                        let tempSeller = this.getRelatedSeller(product)
                        tempSeller.then(s => {
                            tempProducts.push(
                                Object.assign(product, { seller: s.data.seller })
                            )
                        })
                    })
                    this.products =  tempProducts
                    // Sets our products[] to the fulfilled promise's products[], joined with related sellers
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
        async getRelatedSeller (product) {
            return await SellerService.get(product.seller_id)
        }
    }
};
</script>

<style scoped>
</style>
