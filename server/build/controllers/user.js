'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _models = require('../../db/models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var log = _bunyan2.default.createLogger({ name: 'postit-signup' });

var UserController = function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: 'signIn',
    value: function signIn(req, res) {
      var _req$body = req.body,
          username = _req$body.username,
          password = _req$body.password;

      _models.User.findOne({
        where: {
          username: username,
          password: password
        }
      }).then(function (user) {
        if (!user) throw new Error();
        req.session.userId = user.id;
        res.status(200).json({
          status: 'success',
          data: {
            user: user
          }
        });
      }).catch(function (error) {
        log.info('Failed to signin', error);
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'Invalid user / password'
          }
        });
      });
    }
  }, {
    key: 'signUp',
    value: function signUp(req, res) {
      _models.User.create(req.body).then(function (user) {
        return res.status(201).json({
          status: 'success',
          data: {
            user: user
          }
        });
      }).catch(function (error) {
        log.info('Failed to signup', error);
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'Failed to create new user'
          }
        });
      });
    }
  }]);

  return UserController;
}();

exports.default = UserController;