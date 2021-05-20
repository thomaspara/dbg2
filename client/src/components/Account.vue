<template>
    <div>
        <Navbar></Navbar>
        <span class="span_break"></span>
        <div class="card">
            <h1 class="brand-name">Account</h1>
            <h2 class="page-name">Details</h2>
            <form action="#">
                First Name:
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.f_name"
                    :placeholder="customer.f_name"
                />
                Last Name:
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.l_name"
                    :placeholder="customer.l_name"
                />
                Email:
                <input class="form_input" type="text" v-model="customer.email" :placeholder="customer.email" />
                Password:
                <input
                    class="form_input"
                    type="password"
                    v-model="customer.user_password"
                    :placeholder="customer.user_password"
                />
            </form>
            <form action="#">
                Address:
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.address"
                    :placeholder="customer.address"
                />
                Apt:
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.apt_num"
                    :placeholder="customer.apt_num"
                />
                City:
                <input class="form_input" type="text" v-model="customer.city" :placeholder="customer.city" />
                State:
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.state"
                    :placeholder="customer.state"
                />
                Zipcode:
                <input
                    class="form_input"
                    type="text"
                    v-model="customer.zip_code"
                    :placeholder="customer.zip_code"
                />
            </form>

            <h2 class="page-name">Bank Information</h2>
            <form action="#">
                Card Number:
                <input
                    class="form_input"
                    type="text"
                    name="bank_num"
                    placeholder="bank_num"
                />
                <div to="/home" class="button" @click="fetchBank()">Bank Info</div>
            </form>
            <form action="#" v-show="show">
                Card Number:
                <input
                    class="form_input"
                    type="text"
                    name="bank_num"
                    placeholder="bank_num"
                />
                <div to="/home" class="button" @click="fetchBank()">Bank Info</div>
            </form>
            <p class="card-link" @click="showNewCard()">Add another card</p>
            <div to="/home" class="button" @click="updateCustomer()">Details</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Navbar from './Navbar.vue'
import { AuthenticationService } from '@/common/api.service.js'
import { BillingService } from '@/common/api.service.js'
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
                user_password: '',
                address: '',
                apt_num: '',
                city: '',
                state: '',
                zip_code: ''
            }, 
            billing_infos :[], 
            show: false
        }
    },
    created() {
        this.fetchCustomer();
        this.fetchBilling();
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
        async updateCustomer () {
            await AuthenticationService.put(this.$store.getters.customer_id, {
                    f_name: this.customer.f_name,
                    l_name: this.customer.l_name,
                    email: this.customer.email,
                    user_password: this.customer.user_password,
                    address: this.customer.address,
                    apt_num: this.customer.apt_num,
                    city: this.customer.city,
                    state: this.customer.state,
                    zip_code: this.customer.zip_code
            })
                .then(({ data }) => {
                    // this.customer =  data.customer
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
        async fetchBilling () {
            await BillingService.query(this.$store.getters.customer_id)
                .then(({ data }) => {
                    this.billing_infos =  data.billing_infos
                
                })
                .catch(error => {
                    throw new Error(error)
                })
        },
        showNewCard () {
            this.show = !this.show
        }
        // async updateBilling () {
        //     await BillingService.put(this.$store.getters.customer_id, {
        //             billingInfo: this.billing_infos
        //         })
        //         .then(({ data }) => {
        //             // this.billing_infos =  data.billing_infos
        //         })
        //         .catch(error => {
        //             throw new Error(error)
        //         })
        // },
    }
};
</script>

<style scoped>
</style>
