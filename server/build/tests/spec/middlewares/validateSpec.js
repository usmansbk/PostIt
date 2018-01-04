'use strict';

var middlewares = require('../../../middlewares'),
    helpers = require('../helpers'),
    Validate = middlewares.Validate,
    _helpers$util = helpers.util,
    req = _helpers$util.req,
    res = _helpers$util.res;


var callback = function callback() {
  res.statusCode = 200;
};

describe('Validate class contains methods that validate the form data of a req.', function () {
  describe('addUser() method with', function () {
    describe('no invites property in req body', function () {
      it('should return status code of 400', function () {
        Validate.addUsers(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('empty string invites property in req body', function () {
      it('should return status code of 400', function () {
        req.body.invites = '    ';
        Validate.addUsers(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('valid string invites property in req body', function () {
      it('should return status code of 400', function () {
        req.body.invites = 'ben10';
        Validate.addUsers(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });

  describe('postMessage() method with', function () {
    describe('no message property in req body', function () {
      it('should return status code of 400', function () {
        Validate.postMessage(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('empty string message property in req body', function () {
      it('should return status code of 400', function () {
        req.body.message = '    ';
        Validate.postMessage(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('valid string message property in req body', function () {
      it('should return status code of 400', function () {
        req.body.message = 'Hello World!';
        Validate.postMessage(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });

  describe('createGroup() method with', function () {
    describe('no name property in req body', function () {
      it('should return status code of 400', function () {
        Validate.createGroup(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('empty string name property in req body', function () {
      it('should return status code of 400', function () {
        req.body.name = '    ';
        Validate.createGroup(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('valid string name property in req body', function () {
      it('should return status code of 200', function () {
        req.body.name = 'Plumbers HQ';
        Validate.createGroup(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });
});