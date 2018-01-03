const request = require('request');
const db = require('../../../../db/models');

const baseUrl = 'http://localhost:8888/api/user',
  url = `${baseUrl}/signin`,
  signUpUrl = `${baseUrl}/signup`,
  { sequelize } = db;

describe('POST:/api/user/signin', () => {
  beforeAll((done) => {
    request.post(signUpUrl, {
      form: {
        username: 'katana',
        email: 'ninja@sword.com',
        password: '12345678?'
      }
    }, () => {
      done();
    });
  });

  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => {
      done();
    });
  });

  describe('API route for users to login to the application.', () => {
    describe('Submission of form with', () => {
      describe('invalid password with', () => {
        describe('no field', () => {
          it('should return status code 400', (done) => {
            const form = { username: 'katana' };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('blank space string', () => {
          it('should return status code 400', (done) => {
            const form = { username: 'katana', password: '  ' };
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
          const form = { username: 'kunai', password: '12345678' };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('registered username and password', () => {
        it('should return status code 200', (done) => {
          const form = { username: 'katana', password: '12345678?' };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });
    });
  });
});
