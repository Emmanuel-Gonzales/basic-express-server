'use strict';

module.exports = (req, res, next) => {
  console.log(req._parsedUrl.path, req.method);
  next();
};