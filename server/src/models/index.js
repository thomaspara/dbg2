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
// db.users = require('./User.js')(sequelize, Sequelize)

// Relations

module.exports = db
