const AuthenticationController = require('./controllers/AuthenticationController')
const SellerController = require('./controllers/SellerController.js')
const BillingInfoController = require('./controllers/BillingInfoController.js')
const CartController = require('./controllers/CartController.js')
const ProductController = require('./controllers/ProductController.js')
const TransactionController = require('./controllers/TransactionController.js')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    //Customer
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

    //BillingInfo
    app.post('/billinginfo/create',
        BillingInfoController.createBillingInfo)
    app.post('/billinginfo',
        BillingInfoController.fetchBillingInfo)

    //Cart
    app.post('/cart/create',
        CartController.createCart)
    app.post('/cart',
        CartController.fetchCart)
    
    //Product
    app.post('/product/create',
        ProductController.createProduct)
    app.post('/product',
        ProductController.fetchProduct)

    //Transaction
    app.post('/transaction/create',
        TransactionController.createTransaction)
    app.post('/transaction',
        TransactionController.fetchTransaction)
}
