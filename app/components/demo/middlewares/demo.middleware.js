'use strict';

// This is an example of middleware without dependencies
function demoMiddleware(req, res, next) {
  /*
    Do Something
  */

  console.log('Demo middleware');

  next();
}

module.exports = demoMiddleware;
