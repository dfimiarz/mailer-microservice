'use strict'

const express = require('express');
const createError = require('http-errors');
const { checkAccessToken } = require('./middleware/AccessTokenValidator');
const { logRequests } = require('./middleware/RequestLogger')
const logger = require('./logger');

const app = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const app_name = process.env.APP_NAME;

/**
 * APIs
 */
app.get('/', function (req, res) {
  res.send(`${app_name}`);
});

app.get('/alive', function (req, res) {
  res.send('ok');
});

// Add token validation middleware 
app.use('/v1/email', logRequests, checkAccessToken , require('./email/api_v1'));

/**
 * Error handlers
 */
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {

  const message = err.message || 'Something went wrong';
  const status = err.status || 500;

  logger.log('error', `Error. Status: ${status} Message: ${message}`);
  res.status(status).json(message);
})

module.exports = app;
