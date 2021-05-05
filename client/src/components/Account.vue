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
                    name="firstname"
                    placeholder="First Name"
                />
                <input
                    class="form_input"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                />
                <input class="form_input" type="text" name="email" placeholder="Email" />
                <input
                    class="form_input"
                    type="text"
                    name="password"
                    placeholder="Password"
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
export default {
    name: 'Account',
    components: {
        Navbar
    }
};
</script>

<style scoped>
</style>
