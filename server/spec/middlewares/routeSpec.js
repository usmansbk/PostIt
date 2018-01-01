const middlewares = require('../../build/middlewares'),
  helper = require('../helpers');

const { Route } = middlewares;
const { request, response } = helper;
const callback = function callback() {
  response.statusCode = 200;
};

describe('The isAuthenticated function would grant access.', () => {
  describe('When request session property doesn\'t contains userId property', () => {
    it('should return a status code of 403', () => {
      request.session.userId = false;
      Route.isAuthenticated(request, response, callback);
      expect(response.statusCode).toBe(403);
    });
  });

  describe('When request session property contains userId property', () => {
    describe('the callback function is invoked and', () => {
      Route.isAuthenticated(request, response, callback);
      it('should set the value of response status to 200', () => {
        request.session.userId = true;
        Route.isAuthenticated(request, response, callback);
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
