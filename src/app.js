const express = require('express');
const initApp = require('./loaders');

const app = express();
initApp(app);

module.exports = app;