const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            user_password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            //customer_id: Joi.number().integer(),
            f_name: Joi.string(),
            l_name: Joi.string()
        })
        // DEPRECATED VERSION
        //                   = Joi.validate(req.body, schema);
        const {error, value} = schema.validate(req.body.customer);
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password must include:
                            <br>
                            1. It must contain ONLY the following characters: lower case, upper case, numerics.
                            <br>
                            2. It must be at least 8 characters in length and not greater than 32 characters in length.`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information.'
                    })
            }
        } else {
            next()
        }
    }
}
