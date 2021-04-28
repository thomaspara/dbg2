const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (customer, options) {
    const SALT_FACTOR = 8

    if (!customer.changed('password')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(customer.user_password, salt, null))
        .then(hash => {
            customer.setDataValue('user_password', hash)
        })
}
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        user_password: {
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
        l_name: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    })

    Customer.prototype.comparePassword = function (user_password) {
        return bcrypt.compareAsync(user_password, this.user_password)
    }

    return Customer
}
