module.exports = (sequelize, DataTypes) => {
    const Seller = sequelize.define('Seller', {
      seller_id: { // Primary Key
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })

    return Seller
  }
