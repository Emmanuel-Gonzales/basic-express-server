'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger);

// ENDPOINTS
app.get('/hello', (req, res, next) => {
  // console.log(req.route.path);
  res.status(200).send('Hello Heloo');
});

app.use(validator);
app.get('/person', (req, res, next) => {
  res.status(200).send(req.query);
});

const start = (port) => app.listen(port, () => console.log(`listening on port:, ${port}`));


module.exports = { start, app };