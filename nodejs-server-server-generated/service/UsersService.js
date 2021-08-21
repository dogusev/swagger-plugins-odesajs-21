'use strict';


/**
 * Get User
 *
 * returns inline_response_200
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Babich",
  "id" : "61798c29-d0e3-472f-91dd-db912e602249"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves user by id
 *
 * id UUID user id in uuid format
 * returns inline_response_200
 **/
exports.userIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Babich",
  "id" : "61798c29-d0e3-472f-91dd-db912e602249"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

