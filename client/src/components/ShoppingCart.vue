<template>
  <div>
    <Navbar></Navbar>
    <span class="span_break"></span>
    <div v-show="showDone" class="shoppingcart-column">
        <h1 class="brand-name-cart">Order Submitted!</h1>
        <p>Congrats! Continue Shopping</p>
    </div>
    <div v-show="show" class="shoppingcart-column">
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
          <p>Quantity: {{ product.quantity }}</p>
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
              <a class="remove-product" @click="removeCartItem(product.cart_id)">Remove</a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <ul>
          <h5 class="total-text">Delivery: FREE</h5>
          <h5 class="total-text">Tax: 0.00</h5>
          <h3 class="total-text">Total Cost: ${{ totalCost }}</h3>
        </ul>
        <ul class="list-group mb-3">
          <a class="btn btn-continueShipping mt-2 text-white" href="/home"
            >Continue Shopping</a
          >
          <a class="btn btn-checkout mt-2 text-white" @click="orderSubmit()">Submit Order</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { mapGetters } from 'vuex'
import { CartService } from '@/common/api.service.js'
import { ProductService } from '@/common/api.service.js'
import { TransactionService } from '@/common/api.service.js'
export default {
  name: 'Account',
  components: {
    Navbar
  },
  data() {
    return {
      FEcart: [],
      show: true,
      showDone: false
    }
  },
  mounted() {
    this.queryCart()
  },
  methods: {
      orderSubmit(){
        this.FEcart.forEach(product => {
          this.createTransaction(product, product.quantity)
          this.removeCartItem(product.cart_id)
        })
        this.show = !this.show;
        this.showDone = !this.showDone;
      },
      async createTransaction (product, quantity) {
        await TransactionService.create({
          customer_id: this.$store.getters.customer_id,
          product_id: product.product_id,
          total_cost: product.price * quantity
        })
        .then(res => {
          console.log(res)
        })
      },
      async queryCart () {
        await CartService.query(this.$store.getters.customer_id)
        .then(res => {
          let tempCart = []
          res.data.cart.forEach(cartProduct => {
          this.fetchProduct(cartProduct.product_id)
            .then(p => {
              tempCart.push(
                Object.assign(
                  p.data.product,
                {
                  quantity: cartProduct.quantity,
                  cart_id: cartProduct.cart_id
                })
              )
            })
        })
          this.FEcart = tempCart
        })
      },

      async fetchProduct (product_id) {
        return await ProductService.get(product_id)
      },

      async removeCartItem (cart_id) {
        await CartService.delete(cart_id)
        .then(() => {
          this.queryCart()
        })
        .catch(err => {
          console.log(err)
        })
      }
  },
    computed: {
      ...mapGetters(['customer_id']),

      totalCost: {
        get: function () {
          let sum = 0.00
          this.FEcart.forEach(product => {
            sum += product.price
          })
          return sum
        }
      }
    }
}
</script>

<style scoped></style>
