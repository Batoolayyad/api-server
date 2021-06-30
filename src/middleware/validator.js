'use strict';
module.exports = (req, res, next) => {
  if (!req.body.type || !req.body.price) {
    next('did not match the fields');
  } else {
    next();
  }
};