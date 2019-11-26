import Sequelize from 'sequelize'
configs = require('./database.json')
const env       = process.env.NODE_ENV || 'dev'
const config    = configs[env]

const sequelize
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export { sequelize }