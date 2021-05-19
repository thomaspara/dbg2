module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      cart_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      customer_id: { // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',
          key: 'customer_id'
        }
      },
      product_id: { // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'product_id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })

    return Cart
  }
