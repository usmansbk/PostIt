'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _info = require('./helpers/info');

var _info2 = _interopRequireDefault(_info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var logger = (0, _morgan2.default)('dev');
var log = _bunyan2.default.createLogger({ name: 'postit' });

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(logger);
app.use((0, _expressSession2.default)({
  secret: 's3cr3t',
  cookie: {}
}));

app.get('/', function (req, res) {
  res.json(_info2.default);
});

app.use(_api2.default);

app.use(function (err, req, res) /* next */{
  log.error('Error', err);
  res.status(500).json({
    status: 'error',
    message: 'Nothing you can do about it!'
  });
});
exports.default = app;