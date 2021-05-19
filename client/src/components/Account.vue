<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div class="card">
            <h1 class="brand-name">Account</h1>
            <h2 class="page-name">Details</h2>
            <form action="#">
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.f_name"
                    placeholder="customer.f_name"
                />
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.l_name"
                    placeholder="customer.l_name"
                />
                <input class="form_input" type="text" v-model="customer.email" placeholder="customer.email" />
                <input
                    class="form_input"
                    type="password"
                    v-model="customer.user_password"
                    placeholder="customer.user_password"
                />
            </form>
            <h2 class="page-name">Address</h2>
            <form action="#">
                <input
                    class="form_input"
                    type="text"
                    name="firstname"
                    placeholder="Address"
                />
                <input
                    class="form_input"
                    type="text"
                    name="lastname"
                    placeholder="Apt. #"
                />
                <input class="form_input" type="text" name="email" placeholder="City" />
                <input
                    class="form_input"
                    type="text"
                    name="state"
                    placeholder="State"
                />
                <input
                    class="form_input"
                    type="text"
                    name="zipcode"
                    placeholder="Zip Code"
                />
            </form>

            <h2 class="page-name">Card Information</h2>
            <form action="#">
                <input
                    class="form_input"
                    type="text"
                    name="firstname"
                    placeholder="Name on Card"
                />
                <input
                    class="form_input"
                    type="text"
                    name="lastname"
                    placeholder="Card Number"
                />
                <input class="form_input" type="text" name="email" placeholder="Expiration Date" />
                <input
                    class="form_input"
                    type="text"
                    name="password"
                    placeholder="CVV Code"
                />
            </form>
            <p class="login-link">Add another card</p>
            <router-link to="/home" class="button" href="#">Save</router-link>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { AuthenticationService } from '@/common/api.service.js'
export default {
    name: 'Account',
    components: {
        Navbar
    },
    data () {
        return {
            customer: {
                f_name: '',
                l_name: '',
                email: '',
                user_password: ''
            }
        }
    },
    created() {
        this.fetchCustomer();
    },
    methods: {
        async fetchCustomer () {
            await AuthenticationService.get(this.$store.getters.customer_id)
                .then(({ data }) => {
                    this.customer =  data.customer
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
    }
};
</script>

<style scoped>
</style>
