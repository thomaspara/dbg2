const { Transaction } = require('../models')

module.exports = {
    async createTransaction(req, res) {
        try {
            console.log(req.body.transaction)
            const transaction = await Transaction.create({
                customer_id: req.body.transaction.customer_id,
                product_id: req.body.transaction.product_id,
                seller_id: req.body.transaction.seller_id,
                total_cost: req.body.transaction.total_cost,
            })
            res.status(200).send(transaction)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error creating transaction.'
            })
        }
    },
    async fetchTransaction (req, res) {
        try {
            const TRANSACTION_ID = req.params.transaction_id
            const TRANSACTION = await Transaction.findOne({
                where: {
                    transaction_id: TRANSACTION_ID
                }
            })
            if (!TRANSACTION) {
                return res.status(404).send({
                    error: 'Unable to fetch transaction.'
                })
            } else {
                res.send({
                    transaction: TRANSACTION
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch transaction.'
            })
        }
    },

    async editTransaction (req, res) {
        try {
            const TRANSACTION_ID = req.params.transaction_id
            const TRANSACTION = await Transaction.update(
                {
                    customer_id: req.body.transaction.customer_id,
                    product_id: req.body.transaction.product_id,
                    seller_id: req.body.transaction.seller_id,
                    total_cost: req.body.transaction.total_cost,
                },
                {where: {
                    transaction_id: TRANSACTION_ID
                }}
            )
            if (!TRANSACTION) {
                return res.status(404).send({
                    error: 'Unable to update transaction.'
                })
            } else {
                res.send({
                    transaction: TRANSACTION
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to update transaction.'
            })
        }
    },

    async deleteTransaction (req, res) {
        try {
            const TRANSACTION_ID = req.params.transaction_id
            const TRANSACTION = await Transaction.destory({
                where: {
                    transaction_id: TRANSACTION_ID
                }
            })
            if (!TRANSACTION) {
                return res.status(404).send({
                    error: 'Unable to delete transaction.'
                })
            } else {
                res.send({
                    transaction: TRANSACTION
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to delete transaction.'
            })
        }
    }
}
