module.exports = (sequelize, DataTypes) => {
    const Seller = sequelize.define('Seller', {
      seller_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      seller_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      seller_description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    })

    return Seller
  }
