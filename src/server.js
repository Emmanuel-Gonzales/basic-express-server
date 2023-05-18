'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger);

// ENDPOINTS
app.get('/', (req, res, next) => {
  // console.log(req.route.path);
  res.status(200).send('Hello Heloo');
});

// app.use(validator);
app.get('/person', validator, (req, res, next) => {
  res.status(200).send(req.query);
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log(`listening on port: ${port}`));


module.exports = { start, app };