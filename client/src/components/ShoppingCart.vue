<template>
  <div>
    <Navbar></Navbar>
    <span class="span_break"></span>
    <div class="shoppingcart-column">
      <h1 class="brand-name-cart">Shopping Cart</h1>
      <div class="col-md-4">
        <div
          class="total-text-item"
          v-for="product in FEcart"
          :key="product.product_id"
        >
          <p>{{ product.product_name }}</p>
          <p>Product Description: {{ product.product_description }}</p>
          <p>Product ID: {{ product.seller_id }}</p>
          <p>${{ product.price }}</p>
          <div class="product-removal">
            <div class="quantity">
              <label for="quantity quantity-place">Qty</label>
              <input
                id="quantity"
                type="number"
                value="1"
                class="form-control quantity-input"
                min="1"
              />
              <a class="remove-product" href="/">Remove</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <ul>
          <h5 class="total-text">Standard Delivery</h5>
          <h5 class="total-text">Tax</h5>
          <h3 class="total-text">Total Cost</h3>
        </ul>
        <ul class="list-group mb-3">
          <a class="btn btn-continueShipping mt-2 text-white" href="/home"
            >Continue Shopping</a
          >
          <a class="btn btn-checkout mt-2 text-white" href="/">Submit Order</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { mapGetters } from 'vuex'
import { QUERY_CART } from '@/store/actions.type'
export default {
  name: 'Account',
  components: {
    Navbar
  },
  data() {
    return {
      FEcart: []
    }
  },
  mounted() {
    this.queryCart()
    this.FEcart = this.$store.getters.cart
  },
  methods: {

      queryCart () {
        this.$store.dispatch(QUERY_CART, this.$store.getters.customer_id)
      }
  },
    computed: {
        ...mapGetters([
            'customer_id',
            'cart'
        ])
    }
}
</script>

<style scoped></style>
