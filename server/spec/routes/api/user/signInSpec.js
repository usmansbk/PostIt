const request = require('request'),
  url = 'http://localhost:8888/api/user/signin';

describe('POST:/api/user/signin', () => {
  describe('API route for users to login to the application.', () => {
  describe('Submitting a form with', () => {

  describe('registered username and password', () => {
    it('should return status code 200', (done) => {
      const options = {
        username: 'hashirama',
        password: '12345678',
        email: 'shinobi@hokage.com'
      };
      request.post({
          url: 'http://localhost:8888/api/user/signup',
          form: options
        }, () => {
        request.post({
          url,
          form: { username: 'hashirama', password: '12345678' }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      });
    });
  });

  describe('unregistered username and password', () => {
    it('should not return status code 200', (done) => {
      request.post({
        url,
        form: { username: 'madara', password: '12345678' }
      }, (err, res, body) => {
        expect(res.statusCode).not.toBe(200);
        done();
      });
    });
  });

  describe('password less than 8 characters', () => {
    it('should return status code 400', (done) => {
      request.post({
        url,
        form: { username: 'hashirama', password: '1234567' }
      }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });

  describe('empty string username', () => {
    it('should return status code 400', (done) => {
      request.post({
        url,
        form: { username: ' ', password: '12345678' }
      }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });



  describe('empty string password', () => {
    it('should return status code 400', (done) => {
      request.post({
        url,
        form: { username: 'hashirama', password: '' }
      }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });

  describe('null username', () => {
    it('should return status code 400', (done) => {
      request.post({
        url,
        form: { password: '12345678' }
      }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });

  describe('null password', () => {
    it('should return status code 400', (done) => {
      request.post({
        url,
        form: { username: 'hashirama' }
      }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });

  });
  });
});
