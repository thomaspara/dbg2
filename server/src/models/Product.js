module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      product_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      product_description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      seller_id: { // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sellers',
          key: 'seller_id'
        }
      }
    })

    return Product
  }
