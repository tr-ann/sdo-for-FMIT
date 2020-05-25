const Sequelize = require('sequelize');
const configs   = require('./config/database');
const env       = process.env.NODE_ENV || 'dev';
const config    = configs[env];

const sequelize = new Sequelize(
  "myuniversity",
  "postgres",
  "postgres",
  {
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    pool: {
      max: 100,
      min: 0,
      idle: 10000,
      acquire: 30000,
  },
});

const connect = async () => {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection to database has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to database:', err);
    });

  await sequelize.sync();
};

module.exports = {
  sequelize,
  connect,
};