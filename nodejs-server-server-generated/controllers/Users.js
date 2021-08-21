'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.userGET = function userGET (req, res, next) {
  Users.userGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userIdGET = function userIdGET (req, res, next, id) {
  Users.userIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
