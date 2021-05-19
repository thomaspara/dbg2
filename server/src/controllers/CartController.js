const { Cart } = require('../models')

module.exports = {
    async createCart(req, res) {
        try {
            // Check for duplicate cart
            const CART = await Cart.findOne({
                where: {
                    customer_id: req.body.cart.customer_id,
                    product_id: req.body.cart.product_id
                }
            })
            if (!CART) {
                const cart = await Cart.create({
                    customer_id: req.body.cart.customer_id,
                    product_id: req.body.cart.product_id,
                    quantity: req.body.cart.quantity
                })
                res.status(200).send(cart)
            } else {
                res.status(409).send({
                    error: 'Product already exists in cart.'
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error creating cart.'
            })
        }
    },
    async fetchCart (req, res) {
        try {
            const CART_ID = req.params.cart_id
            const CART = await Cart.findOne({
                where: {
                    cart_id: CART_ID
                }
            })
            if (!CART) {
                return res.status(404).send({
                    error: 'Unable to fetch cart.'
                })
            } else {
                res.send({
                    cart: CART
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch cart.'
            })
        }
    },

    async queryCart (req, res) {
        try {
            const CUSTOMER_ID = req.params.customer_id
            const CART = await Cart.findAll({
                where: {
                    customer_id: CUSTOMER_ID
                }
            })
            if (!CART) {
                return res.status(404).send({
                    error: 'Unable to query cart.'
                })
            } else {
                res.send({
                    cart: CART,
                    product_count: CART.length
                })
            }
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error trying to query cart.'
            })
        }
    },

    async editCart (req, res) {
        try {
            const CART_ID = req.params.cart_id
            const CART = await Cart.update(
                {
                    customer_id: req.body.cart.customer_id,
                    product_id: req.body.cart.product_id
                },
                {where: {
                    cart_id: CART_ID
                }}
            )
            if (!CART) {
                return res.status(404).send({
                    error: 'Unable to update cart.'
                })
            } else {
                res.send({
                    cart: CART
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to update cart.'
            })
        }
    },

    async deleteCart (req, res) {
        try {
            const CART_ID = req.params.cart_id
            const CART = await Cart.destroy({
                where: {
                    cart_id: CART_ID
                }
            })
            if (!CART) {
                return res.status(404).send({
                    error: 'Unable to delete cart.'
                })
            } else {
                res.send({
                    cart: CART
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to delete cart.'
            })
        }
    }
}
