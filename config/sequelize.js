import Sequelize from 'sequelize'
configs = require('./database.json')
const env       = process.env.NODE_ENV || 'dev'
const config    = configs[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config)

async function connect() {
    await sequelize.authenticate()
    await sequelize.sync()
}

export { sequelize, connect }
