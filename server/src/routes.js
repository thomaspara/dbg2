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
    app.get('/customer/:customer_id',
        AuthenticationController.fetchCustomer)
    app.put('/customer/edit/:customer_id',
        AuthenticationController.editCustomer)

    // Seller
    app.post('/seller/create',
        SellerController.createSeller)
    app.get('/seller/:seller_id',
        SellerController.fetchSeller)
    app.put('/seller/edit/:seller_id',
        SellerController.editSeller)

    //BillingInfo
    app.post('/billinginfo/create',
        BillingInfoController.createBillingInfo)
    app.get('/billinginfo/:bill_id',
        BillingInfoController.fetchBillingInfo)
    app.put('/billinginfo/edit/:bill_id',
        BillingInfoController.editBillingInfo)

    //Cart
    app.post('/cart/create',
        CartController.createCart)
    app.get('/cart/:cart_id',
        CartController.fetchCart)
    app.put('/cart/edit/:cart_id',
        CartController.editCart)

    //Product
    app.post('/product/create',
        ProductController.createProduct)
    app.get('/product/query',
        ProductController.query)
    app.get('/product/:product_id',
        ProductController.fetchProduct) // FETCH MUST BE LAST ROUTE
    app.put('/product/edit/:product_id',
        ProductController.editProduct)

    //Transaction
    app.post('/transaction/create',
        TransactionController.createTransaction)
    app.get('/transaction/:transaction_id',
        TransactionController.fetchTransaction)
    app.put('/transaction/edit/:transaction_id',
        TransactionController.editTransaction)
}
