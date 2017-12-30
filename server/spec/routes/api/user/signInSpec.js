const request = require('request'),
  url = 'http://localhost:8888/api/user/signin';

describe('POST:/api/user/signin', () => {
  describe('API route for users to login to the application', () => {
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

  describe('Passing an unregistered username', () => {
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

  describe('Passing an invalid password', () => {
    it('should not return status code 200', (done) => {
      request.post({
        url,
        form: { username: 'hashirama', password: '1234567' }
      }, (err, res, body) => {
        expect(res.statusCode).not.toBe(200);
        done();
      });
    });
  });

  describe('Passing an invalid password', () => {
    it('should not return status code 200', (done) => {
      request.post({
        url,
        form: { username: 'hashirama', password: '' }
      }, (err, res, body) => {
        expect(res.statusCode).not.toBe(200);
        done();
      });
    });
  });



  describe('Not passing a username', () => {
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

  describe('Not passing a password', () => {
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
