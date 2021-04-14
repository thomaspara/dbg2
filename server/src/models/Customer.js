const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (customer, options) {
    const SALT_FACTOR = 8

    if (!customer.changed('password')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(customer.password, salt, null))
        .then(hash => {
            customer.setDataValue('password', hash)
        })
}
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer_id: { // Primary Key
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        f_name: DataTypes.STRING,
        l_name: DataTypes.STRING,
        /* cart: DataTypes.ARRAY(DataTypes.DECIMAL)
            Only works with postgresQL
        */
       cart: DataTypes.JSON // Save array of product_id's here
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    })

    Customer.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return Customer
}
