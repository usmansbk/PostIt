'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isEmpty = /^\s*$/m,
    MAX_NAME_LEN = 22,
    MAX_PURPOSE_LENGTH = 50;

var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: 'createGroup',
    value: function createGroup(req, res, next) {
      var _req$body = req.body,
          name = _req$body.name,
          purpose = _req$body.purpose;

      if (!name || isEmpty.test(name) || name.length > MAX_NAME_LEN || purpose && purpose.length > MAX_PURPOSE_LENGTH) {
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'name: name is required'
          }
        });
        return;
      }
      next();
    }
  }, {
    key: 'addUsers',
    value: function addUsers(req, res, next) {
      var invites = req.body.invites;

      if (!invites || isEmpty.test(invites)) {
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'invites: A list of users is required'
          }
        });
        return;
      }
      next();
    }
  }, {
    key: 'postMessage',
    value: function postMessage(req, res, next) {
      var message = req.body.message;

      if (!message || isEmpty.test(message)) {
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'message: A message is required'
          }
        });
        return;
      }
      next();
    }
  }]);

  return Validate;
}();

exports.default = Validate;