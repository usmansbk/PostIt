const request = require('request'),
  url = 'http://localhost:8888/api/user/signin';

describe('POST:/api/user/signin', () => {
  describe('API route for users to login to the application.', () => {
    describe('Submission of form with', () => {
      describe('invalid password with', () => {
        describe('no field and', () => {
          it('should return status code 400', (done) => {
            const form = { username: 'keneki' };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('blank space string', () => {
          it('should return status code 400', (done) => {
            const form = { username: 'keneki', password: '  ' };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });
      });

      describe('invalid username with', () => {
        describe('null field', () => {
          it('should return status code 400', (done) => {
            const form = { password: '12345678?' };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('blank space string', () => {
          it('should return status code 400', (done) => {
            const form = { username: '  ', password: '12345678?' };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });
      });

      describe('valid unregistered username and password', () => {
        it('should return status code 400', (done) => {
          const form = { username: 'sakura', password: '12345678' };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('registered username and password', () => {
        it('should return status code 200', (done) => {
          const form = { username: 'keneki', password: '12345678?' };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });
    });
  });
});
