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
    app.delete('/customer/delete/:customer_id',
        AuthenticationController.deleteCustomer)

    // Seller
    app.post('/seller/create',
        SellerController.createSeller)
    app.get('/seller/:seller_id',
        SellerController.fetchSeller)
    app.put('/seller/edit/:seller_id',
        SellerController.editSeller)
    app.delete('/seller/delete/:seller_id',
        SellerController.deleteSeller)

    //BillingInfo
    app.post('/billinginfo/create',
        BillingInfoController.createBillingInfo)
    app.get('/billinginfo/:bill_id',
        BillingInfoController.fetchBillingInfo)
    app.put('/billinginfo/edit/:bill_id',
        BillingInfoController.editBillingInfo)
    app.delete('/billinginfo/delete/:bill_id',
        BillingInfoController.deleteBillingInfo)

    //Cart
    app.post('/cart/create',
        CartController.createCart)
    app.get('/cart/:cart_id',
        CartController.fetchCart)
    app.put('/cart/edit/:cart_id',
        CartController.editCart)
    app.get('/cart/query/:customer_id',
        CartController.queryCart)
    app.delete('/cart/delete/:cart_id',
        CartController.deleteCart)

    //Product
    app.post('/product/create',
        ProductController.createProduct)
    app.get('/product/query',
        ProductController.query)
    app.get('/product/:product_id',
        ProductController.fetchProduct) // FETCH MUST BE LAST ROUTE
    app.put('/product/edit/:product_id',
        ProductController.editProduct)
    app.delete('/product/delete/:product_id',
        ProductController.deleteProduct)

    //Transaction
    app.post('/transaction/create',
        TransactionController.createTransaction)
    app.get('/transaction/query/:customer_id',
        TransactionController.query)
    app.get('/transaction/:transaction_id',
        TransactionController.fetchTransaction)
    app.put('/transaction/edit/:transaction_id',
        TransactionController.editTransaction)
    app.delete('/transaction/delete/:transaction_id',
        TransactionController.deleteTransaction)
}
