'use strict';
const logging = require('logging');

module.exports.todo = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: logging.log()        
      },
      null,
      2
    ),
  };

 };
