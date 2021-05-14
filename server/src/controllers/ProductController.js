const { Product } = require('../models')

module.exports = {
    async createProduct(req, res) {
        try {
            const product = await Product.create({
                product_name: req.body.product.product_name,
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
            const PRODUCT_ID = req.params.product_id
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
    },

    async query (req, res) {
        try {
            const PRODUCTS = await Product.findAll()
            if (!PRODUCTS) {
                return res.status(404).send({
                    error: 'Unable to fetch products.'
                })
            } else {
                res.send({
                    products: PRODUCTS,
                    productsCount: PRODUCTS.length
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch products.'
            })
        }
    },

    async editProduct (req, res) {
        try {
            const PRODUCT_ID = req.params.product_id
            const PRODUCT = await Product.update(
                {
                    product_name: req.body.product.product_name,
                    price: req.body.product.price,
                    product_description: req.body.product.product_description,
                    seller_id: req.body.product.seller_id
                },
                {where: {
                    product_id: PRODUCT_ID
                }}
            )
            if (!PRODUCT) {
                return res.status(404).send({
                    error: 'Unable to update product.'
                })
            } else {
                res.send({
                    product: PRODUCT
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to update product.'
            })
        }
    },

    async deleteProduct (req, res) {
        try {
            const PRODUCT_ID = req.params.product_id
            const PRODUCT = await Product.destory({
                where: {
                    product_id: PRODUCT_ID
                }
            })
            if (!PRODUCT) {
                return res.status(404).send({
                    error: 'Unable to delete Product.'
                })
            } else {
                res.send({
                    product: PRODUCT
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to delete Product.'
            })
        }
    }
}
