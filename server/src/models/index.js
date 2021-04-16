const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(
        process.env[config.use_env_variable],
        config.db.database,
        config.db.user,
        config.db.password,
        config.db.options
    );
} else {
    sequelize = new Sequelize(
        config.db.database,
        config.db.user,
        config.db.password,
        config.db.options
    )
}

fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
)
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

// Models/Tables
db.customers = require('./Customer.js')(sequelize, Sequelize)
db.billing_info = require('./BillingInfo.js')(sequelize, Sequelize)
db.products = require('./Product.js')(sequelize, Sequelize)
db.sellers = require('./Seller.js')(sequelize, Sequelize)
db.transactions = require('./Transaction.js')(sequelize, Sequelize)
db.carts = require('./Cart.js')(sequelize, Sequelize)

/*  Relations
    https://sequelize.org/v3/docs/associations/
*/

/*
    BelongsTo associations are associations where the foreign key for the one-to-one relation exists on the source model.
*/

/*
    HasOne associations are associations where the foreign key for the one-to-one relation exists on the target model.
*/
db.customers.hasOne(db.carts, { foreignKey: 'customer_id' }) // cart is the target
db.customers.hasOne(db.billing_info, { foreignKey: 'customer_id' })

/*
    One-To-Many associations are connecting one source with multiple targets. The targets however are again connected to exactly one specific source.
*/
db.sellers.hasMany(db.products, { foreignKey: 'seller_id' }) // a seller lists multiple products

/*
    Belongs-To-Many associations are used to connect sources with multiple targets. Furthermore the targets can also have connections to multiple sources.
*/
db.carts.belongsToMany(db.products, { foreignKey: 'product_id' }) // a product can be in multiple carts


module.exports = db
