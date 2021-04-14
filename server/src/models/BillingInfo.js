module.exports = (sequelize, DataTypes) => {
    const BillingInfo = sequelize.define('BillingInfo', {
      bill_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      bank_num: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      customer_id: { // Foreign Key
        type: DataTypes.INTEGER,
        references: {
          model: 'Customers',
          key: 'customer_id'
        }
      }
    })

    return BillingInfo
  }
