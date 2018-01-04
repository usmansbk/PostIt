"use strict";

var req = {
  session: {},
  body: {}
},
    res = {
  status: function status(code) {
    this.statusCode = code;
    return this;
  },

  json: function json() {
    return this;
  }
};

var registerUsers = function registerUsers(users, req, url) {
  users.forEach(function (user) {
    return req.post(url, { form: user });
  });
};

module.exports = {
  req: req, res: res, registerUsers: registerUsers
};