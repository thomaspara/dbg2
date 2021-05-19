const {Customer} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status STATUS CODES

function jwtSignCustomer (customer) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(customer, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const CUSTOMER = await Customer.create({
                email: req.body.customer.email,
                user_password: req.body.customer.user_password,
                f_name: req.body.customer.f_name,
                l_name: req.body.customer.l_name,
                address: req.body.customer.address,
                apt: req.body.customer.apt,
                city: req.body.customer.city,
                state: req.body.customer.state,
                zip_code: req.body.customer.zip_code
            })
            const customerJson = CUSTOMER.toJSON()
            res.status(200).send({
                customer: {
                    customer_id: customerJson.customer_id,
                    email: customerJson.email,
                    f_name: customerJson.f_name,
                    l_name: customerJson.l_name,
                    address: customerJson.address,
                    apt: customerJson.apt,
                    city: customerJson.city,
                    state: customerJson.state,
                    zip_code: customerJson.zip_code,
                    createdAt: customerJson.createdAt,
                    updatedAt: customerJson.updatedAt
                },
                token: jwtSignCustomer(customerJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email is already in use.'
            }) // email already exists
        }
    },

    async login (req, res) {
        try {
            const CUSTOMER = await Customer.findOne({
                where: {
                    email: req.body.customer.email
                }
            })
            if (!CUSTOMER) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }

            const isPasswordValid = await CUSTOMER.comparePassword(req.body.customer.user_password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }
            const customerJson = CUSTOMER.toJSON()
            res.status(200).send({
                customer: {
                    customer_id: customerJson.customer_id,
                    email: customerJson.email,
                    f_name: customerJson.f_name,
                    l_name: customerJson.l_name,
                    token: jwtSignCustomer(customerJson)
                },

            })

        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to log in.'
            })
        }
    },

    async fetchCustomer (req, res) {
        try {
            const CUSTOMER_ID = req.params.customer_id
            const CUSTOMER = await Customer.findOne({
                where: {
                    customer_id: CUSTOMER_ID
                }
            })
            if (!CUSTOMER) {
                return res.status(404).send({
                    error: 'Unable to fetch customer.'
                })
            } else {
                res.send({
                    customer: CUSTOMER,
                    customersCount: CUSTOMER.length
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch customer.'
            })
        }
    },

    async editCustomer (req, res) {
        try {
            const CUSTOMER_ID = req.params.customer_id
            const CUSTOMER = await Customer.update(
                {
                    email: req.body.customer.email,
                    user_password: req.body.customer.user_password,
                    f_name: req.body.customer.f_name,
                    l_name: req.body.customer.l_name,
                    address: req.body.customer.address,
                    apt: req.body.customer.apt,
                    city: req.body.customer.city,
                    state: req.body.customer.state,
                    zip_code: req.body.customer.zip_code
                },
                {where: {
                    customer_id: CUSTOMER_ID
                }}
            )
            if (!CUSTOMER) {
                return res.status(404).send({
                    error: 'Unable to update customer.'
                })
            } else {
                res.send({
                    customer: CUSTOMER,
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to update customer.'
            })
        }
    },

    async deleteCustomer (req, res) {
        try {
            const CUSTOMER_ID = req.params.customer_id
            const CUSTOMER = await Customer.destroy({
                where: {
                    customer_id: CUSTOMER_ID
                }
            })
            if (!CUSTOMER) {
                return res.status(404).send({
                    error: 'Unable to delete Customer.'
                })
            } else {
                res.send({
                    customer: CUSTOMER,
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to delete Customer.',
            })
        }
    }
}
