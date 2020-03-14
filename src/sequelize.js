const Sequelize = require('sequelize');
const configs   = require('./config/database');
const env       = process.env.NODE_ENV || 'dev';
const config    = configs[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
});

const connect = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};

module.exports = {
  sequelize,
  connect,
};