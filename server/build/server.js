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

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var logger = (0, _morgan2.default)('dev');

var appInfo = {
  name: 'PostIt Server',
  version: '1.0.0',
  status: 'online',
  about: 'This application allows people create accounts, create groups and add registerd users to the groups, and the send messages out to these groups whenever they want.',
  author: 'Babakolo Usman Suleiman',
  contact: 'https://github.com/usmansbk'
};

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use(logger);
app.use((0, _expressSession2.default)({
  secret: 's3cr3t',
  cookie: {}
}));

app.get('/', function (req, res) {
  res.json(appInfo);
});

app.use(_api2.default);
/*
app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'Nothing you can do about it!'
  });
});
*/

exports.default = app;