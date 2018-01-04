'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middlewares = require('../../middlewares');

var _controllers = require('../../controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/api/group/', _middlewares.Route.isAuthenticated);

router.post('/api/user/signup', _controllers.UserController.signUp);
router.post('/api/user/signin', _controllers.UserController.signIn);
router.post('/api/group/', _middlewares.Validate.createGroup, _controllers.GroupController.createGroup);
router.post('/api/group/:guid/message', _middlewares.Validate.postMessage, _controllers.GroupController.postMessage);
router.post('/api/group/:guid/user', _middlewares.Validate.addUsers, _controllers.GroupController.addUsers);
router.get('/api/group/:guid/messages', _controllers.GroupController.retrieveMessages);
router.all('*', function (req, res) {
  res.status(405).json({
    status: 'fail',
    data: {
      message: 'Bad url'
    }
  });
});

exports.default = router;