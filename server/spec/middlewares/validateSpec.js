const middlewares = require('../../build/middlewares'),
  helpers = require('../helpers'),
  { Validate } = middlewares,
  { request, response } = helpers;

const callback = function callback() {
  response.statusCode = 200;
};

describe('Validate class contains methods that validate the form data of a request.', () => {
  describe('addUser() method with', () => {
    describe('no invites property in request body', () => {
      it('should return status code of 400', () => {
        Validate.addUsers(request, response, callback);
        expect(response.statusCode).toBe(400);
      });
    });

    describe('empty string invites property in request body', () => {
      it('should return status code of 400', () => {
        request.body.invites = '    ';
        Validate.addUsers(request, response, callback);
        expect(response.statusCode).toBe(400);
      });
    });

    describe('valid string invites property in request body', () => {
      it('should return status code of 400', () => {
        request.body.invites = 'ben10';
        Validate.addUsers(request, response, callback);
        expect(response.statusCode).toBe(200);
      });
    });
  });

  describe('postMessage() method with', () => {
    describe('no message property in request body', () => {
      it('should return status code of 400', () => {
        Validate.postMessage(request, response, callback);
        expect(response.statusCode).toBe(400);
      });
    });

    describe('empty string message property in request body', () => {
      it('should return status code of 400', () => {
        request.body.message = '    ';
        Validate.postMessage(request, response, callback);
        expect(response.statusCode).toBe(400);
      });
    });

    describe('valid string message property in request body', () => {
      it('should return status code of 400', () => {
        request.body.message = 'Hello World!';
        Validate.postMessage(request, response, callback);
        expect(response.statusCode).toBe(200);
      });
    });
  });

  describe('createGroup() method with', () => {
    describe('no name property in request body', () => {
      it('should return status code of 400', () => {
        Validate.createGroup(request, response, callback);
        expect(response.statusCode).toBe(400);
      });
    });

    describe('empty string name property in request body', () => {
      it('should return status code of 400', () => {
        request.body.name = '    ';
        Validate.createGroup(request, response, callback);
        expect(response.statusCode).toBe(400);
      });
    });

    describe('valid string name property in request body', () => {
      it('should return status code of 200', () => {
        request.body.name = 'Plumbers HQ';
        Validate.createGroup(request, response, callback);
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
