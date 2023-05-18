'use strict';

module.exports = (req, res, next) => {
  if(Object.keys(req.query) == 'name'){
    next();
  }else{
    res.status(500).send('error 500: please input a name query');
  }
  next();
};