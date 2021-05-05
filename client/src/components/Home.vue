<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div v-for="product in products" class="product-card">
            <p>{{ product.name }}</p>
            <p>Product ID:{{ product.productId }}</p>
            <p>{{ product.productSeller }}</p>
            <p>${{ product.price }}</p>
            <font-awesome-icon @click="addCart()" class="plus-icon" :icon="['fas', 'plus-circle']" />
        </div>
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
            products: [
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
    // created() {
    //     this.getProducts();
    // },
    methods: {
        // async getProducts() {
        //     const res = await fetch("http://localhost:8082/products");
        //     const data = await res.json();
        //     this.products = new Proxy(data.data, {});
        //     console.log(this.products);
        // },
        addCart() {
            console.log("Added to cart")
        }
    },
};
</script>

<style scoped>
.span_break {
    margin-top: 2em;
    display: block;
}
.plus-icon {
    color: #AF38FB;
    cursor: pointer;
}
</style>
