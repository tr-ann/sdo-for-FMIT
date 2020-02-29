const express = require('express');
const initApp = require('./loaders');
const databaseConnect = require('./sequelize').connect;

(async () => {
  
  try {
    
    await databaseConnect();

    const app = express();
    initApp(app);

    module.exports = app;
  }
  catch (error) {

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    process.exit(1);
  }
})();