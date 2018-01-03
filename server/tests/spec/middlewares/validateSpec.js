const middlewares = require('../../../build/middlewares'),
  helpers = require('../helpers'),
  { Validate } = middlewares,
  { req, res } = helpers.util;

const callback = function callback() {
  res.statusCode = 200;
};

describe('Validate class contains methods that validate the form data of a req.', () => {
  describe('addUser() method with', () => {
    describe('no invites property in req body', () => {
      it('should return status code of 400', () => {
        Validate.addUsers(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('empty string invites property in req body', () => {
      it('should return status code of 400', () => {
        req.body.invites = '    ';
        Validate.addUsers(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('valid string invites property in req body', () => {
      it('should return status code of 400', () => {
        req.body.invites = 'ben10';
        Validate.addUsers(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });

  describe('postMessage() method with', () => {
    describe('no message property in req body', () => {
      it('should return status code of 400', () => {
        Validate.postMessage(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('empty string message property in req body', () => {
      it('should return status code of 400', () => {
        req.body.message = '    ';
        Validate.postMessage(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('valid string message property in req body', () => {
      it('should return status code of 400', () => {
        req.body.message = 'Hello World!';
        Validate.postMessage(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });

  describe('createGroup() method with', () => {
    describe('no name property in req body', () => {
      it('should return status code of 400', () => {
        Validate.createGroup(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('empty string name property in req body', () => {
      it('should return status code of 400', () => {
        req.body.name = '    ';
        Validate.createGroup(req, res, callback);
        expect(res.statusCode).toBe(400);
      });
    });

    describe('valid string name property in req body', () => {
      it('should return status code of 200', () => {
        req.body.name = 'Plumbers HQ';
        Validate.createGroup(req, res, callback);
        expect(res.statusCode).toBe(200);
      });
    });
  });
});
