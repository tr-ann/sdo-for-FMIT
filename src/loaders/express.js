const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { SRC_DIR } = require('../../settings');
const cors = require('cors');


module.exports = (app) => {
  app
    .use(cookieParser())
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(SRC_DIR + '/uploads'))
    .use(cors());
};