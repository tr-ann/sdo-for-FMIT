module.exports = {

  dev: {
    username: process.env.DEV_DB_USERNAME || 'postgres',
    password: process.env.DEV_DB_PASSWORD || 'root',
    database: process.env.DEV_DB_NAME || 'my_university',
    host: process.env.DEV_DB_HOST || '127.0.0.1',
    dialect: process.env.DEV_DB_DIALECT || 'postgres',
  },
  
  test: {
    username: process.env.PROD_DB_USERNAME || 'postgres',
    password: process.env.PROD_DB_PASSWORD || 'root',
    database: process.env.PROD_DB_NAME || 'my_university',
    host: process.env.PROD_DB_HOST || '127.0.0.1',
    dialect: process.env.PROD_DB_DIALECT || 'postgres',
  },
  
  prod: {
    username: process.env.TEST_DB_USERNAME || 'postgres',
    password: process.env.TEST_DB_PASSWORD || 'root',
    database: process.env.TEST_DB_NAME || 'my_university',
    host: process.env.TEST_DB_HOST || '127.0.0.1',
    dialect: process.env.TEST_DB_DIALECT || 'postgres',
  },
};