const { Transaction } = require('../models')

module.exports = {
    async createTransaction(req, res) {
        try {
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
    async query (req, res) {
        try {
            const TRANSACTIONS = await Transaction.findAll({
                where: {
                    customer_id: req.params.customer_id
                }
            })
            if (!TRANSACTIONS) {
                return res.status(404).send({
                    error: 'Unable to fetch transactions.'
                })
            } else {
                res.send({
                    transactions: TRANSACTIONS,
                    transactionCount: TRANSACTIONS.length
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch transactions.'
            })
        }
    }
}
