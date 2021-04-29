const { Product } = require('../models')

module.exports = {
    async createProduct(req, res) {
        try {
            console.log(req.body.product)
            const product = await Product.create({
                product_name: req.body.product.customer_id,
                price: req.body.product.price,
                product_description: req.body.product.product_description,
                seller_id: req.body.product.seller_id
            })
            res.status(200).send(product)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error creating product.'
            })
        }
    },
    async fetchProduct (req, res) {
        try {
            const PRODUCT_ID = req.body.product_id
            const PRODUCT = await Product.findOne({
                where: {
                    product_id: PRODUCT_ID
                }
            })
            if (!PRODUCT) {
                return res.status(404).send({
                    error: 'Unable to fetch product.'
                })
            } else {
                res.send({
                    product: PRODUCT
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch product.'
            })
        }
    }
}
