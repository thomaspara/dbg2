const { BillingInfo } = require('../models')

module.exports = {
    async createBillingInfo (req, res) {
        try {
            console.log(req.body.billingInfo)
            const billingInfo = await BillingInfo.create({
                bank_num: req.body.billingInfo.bank_num,
                customer_id: req.body.billingInfo.customer_id
            })
            res.status(200).send(billingInfo)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error creating BillingInfo.'
            })
        }
    },
    async fetchBillingInfo (req, res) {
        try {
            const BILL_ID = req.params.bill_id
            const BILLINGINFO = await BillingInfo.findOne({
                where: {
                    bill_id: BILL_ID
                }
            })
            if (!BILLINGINFO) {
                return res.status(404).send({
                    error: 'Unable to fetch BillingInfo.'
                })
            } else {
                res.send({
                    billingInfo: BILLINGINFO
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch BillingInfo.'
            })
        }
    },

    async editBillingInfo (req, res) {
        try {
            const BILL_ID = req.params.bill_id
            const BILLINGINFO = await BillingInfo.update(
                {
                    bank_num: req.body.billingInfo.bank_num,
                    customer_id: req.body.billingInfo.customer_id
                },
                {where: {
                    bill_id: BILL_ID
                }}
            )
            if (!BILLINGINFO) {
                return res.status(404).send({
                    error: 'Unable to update BillingInfo.'
                })
            } else {
                res.send({
                    billingInfo: BILLINGINFO
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to update BillingInfo.'
            })
        }
    },

    async deleteBillingInfo (req, res) {
        try {
            const BILL_ID = req.params.bill_id
            const BILLINGINFO = await BillingInfo.destroy({
                where: {
                    bill_id: BILL_ID
                }
            })
            if (!BILLINGINFO) {
                return res.status(404).send({
                    error: 'Unable to delete BillingInfo.'
                })
            } else {
                res.send({
                    billingInfo: BILLINGINFO
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to delete BillingInfo.'
            })
        }
    }
}
