module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      product_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seller_id: { // Foreign Key
        type: DataTypes.INTEGER,
        references: {
          model: 'Sellers',
          key: 'seller_id'
        }
      }
    })

    return Product
  }
