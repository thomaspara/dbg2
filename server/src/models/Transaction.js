module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      transaction_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer_id: { // Foreign Key
        type: DataTypes.INTEGER,
        references: {
          model: 'Customers',
          key: 'customer_id'
        }
      },
      product_id: { // Foreign Key
        type: DataTypes.INTEGER,
        references: {
          model: 'Products',
          key: 'product_id'
        }
      },
      seller_id: { // Foreign Key
        type: DataTypes.INTEGER,
        references: {
          model: 'Sellers',
          key: 'seller_id'
        }
      }
    })

    return Transaction
  }
