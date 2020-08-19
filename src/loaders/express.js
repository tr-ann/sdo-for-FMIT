const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');


module.exports = (app) => {
  app
    .use(cookieParser())
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors());
};