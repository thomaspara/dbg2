const { Seller } = require('../models')

module.exports = {
    async createSeller (req, res) {
        try {
            console.log(req.body.seller)
            const seller = await Seller.create({
                seller_name: req.body.seller.seller_name,
                seller_description: req.body.seller.seller_description
            })
            res.status(200).send(seller)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: 'Error creating seller.'
            })
        }
    },
    async fetchSeller (req, res) {
        try {
            const SELLER_ID = req.params.seller_id
            const SELLER = await Seller.findOne({
                where: {
                    seller_id: SELLER_ID
                }
            })
            if (!SELLER) {
                return res.status(404).send({
                    error: 'Unable to fetch seller.'
                })
            } else {
                res.send({
                    seller: SELLER
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to fetch seller.'
            })
        }
    },

    async editSeller (req, res) {
        try {
            const SELLER_ID = req.params.seller_id
            const SELLER = await Seller.update(
                {
                    seller_name: req.body.seller.seller_name,
                    seller_description: req.body.seller.seller_description
                },
                {where: {
                    seller_id: SELLER_ID
                }}
            )
            if (!SELLER) {
                return res.status(404).send({
                    error: 'Unable to update Seller.'
                })
            } else {
                res.send({
                    seller: SELLER
                })
            }
        } catch (err) {
            res.status(400).send({
                error: 'Error trying to update Seller.'
            })
        }
    }
}
