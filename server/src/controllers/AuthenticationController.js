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
            const { email, password } = req.body.customer
            const CUSTOMER = await Customer.create({
                email: email,
                password: password
            })
            const customerJson = CUSTOMER.toJSON()
            res.status(200).send({
                customer: {
                    id: customerJson.id,
                    email: customerJson.email,
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

            const isPasswordValid = await CUSTOMER.comparePassword(req.body.customer.password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect.'
                })
            }
            const customerJson = CUSTOMER.toJSON()
            res.status(200).send({
                customer: {
                    id: customerJson.id,
                    email: customerJson.email,
                    token: jwtSignCustomer(customerJson)
                },

            })

        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to log in.'
            })
        }
    }
}