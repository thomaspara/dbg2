const { Cart } = require('../models')

module.exports = {
    async createCart(req, res) {
        try {
            console.log(req.body.cart)
            const cart = await Cart.create({
                customer_id: req.body.cart.customer_id,
                product_id: req.body.cart.bank_num
            })
            res.status(200).send(cart)
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

    async editCart (req, res) {
        try {
            const CART_ID = req.params.cart_id
            const CART = await Cart.update(
                {
                    customer_id: req.body.cart.customer_id,
                    product_id: req.body.cart.bank_num
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
    }
}
