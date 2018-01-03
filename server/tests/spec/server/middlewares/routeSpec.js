const middlewares = require('../../../../build/middlewares'),
  helper = require('../helpers');

const { Route } = middlewares;
const { req, res } = helper.util;
const callback = function callback() {
  res.statusCode = 200;
};

describe('The isAuthenticated function grants authentication.', () => {
  describe('No userId property in req.session object', () => {
    it('should return a status code of 403', () => {
      req.session.userId = false;
      Route.isAuthenticated(req, res, callback);
      expect(res.statusCode).toBe(403);
    });
  });

  describe('When req.session has userId property defined,', () => {
    describe('the callback function is invoked and', () => {
      Route.isAuthenticated(req, res, callback);
      it('should set the value of res status to 200', () => {
        req.session.userId = true;
        Route.isAuthenticated(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });
});
