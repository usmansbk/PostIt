'use strict';

var middlewares = require('../../../middlewares'),
    helper = require('../helpers');

var Route = middlewares.Route;
var _helper$util = helper.util,
    req = _helper$util.req,
    res = _helper$util.res;

var callback = function callback() {
  res.statusCode = 200;
};

describe('The isAuthenticated function grants authentication.', function () {
  describe('No userId property in req.session object', function () {
    it('should return a status code of 403', function () {
      req.session.userId = false;
      Route.isAuthenticated(req, res, callback);
      expect(res.statusCode).toBe(403);
    });
  });

  describe('When req.session has userId property defined,', function () {
    describe('the callback function is invoked and', function () {
      Route.isAuthenticated(req, res, callback);
      it('should set the value of res status to 200', function () {
        req.session.userId = true;
        Route.isAuthenticated(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });
});