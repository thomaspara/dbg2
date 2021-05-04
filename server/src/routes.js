const AuthenticationController = require('./controllers/AuthenticationController')
const SellerController = require('./controllers/SellerController.js')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)

    // Seller
    app.post('/seller/create',
        SellerController.createSeller)
    app.post('/seller',
        SellerController.fetchSeller)
}
