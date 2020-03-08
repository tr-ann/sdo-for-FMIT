const Sequelize = require('sequelize');
const configs   = require('./config/database.json');
const env       = process.env.NODE_ENV || 'dev';
const config    = configs[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: false,
});

const connect = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};

module.exports = {
  sequelize,
  connect,
};