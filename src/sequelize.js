const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DEV_DB_NAME,
  process.env.DEV_DB_USERNAME,
  process.env.DEV_DB_PASSWORD,
  {
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DB_DIALECT,
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