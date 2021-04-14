const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express() // Used to build REST endpoints
app.use(morgan('combined')) // Generates logs when pinging our API
app.use(bodyParser.json()) // Process JSON data easily
app.use(cors())

// require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })
