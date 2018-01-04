'use strict';

var _server = require('../../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = require('supertest');

describe('POST /api/user/signup', function () {
  it('repond with json', function (done) {
    request(_server2.default).get('/').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function (err) {
      if (err) {
        done.fail(err);
      } else {
        done();
      }
    });
  });
});