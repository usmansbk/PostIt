let request = require('request');

const db = require('../../../../../db/models'),
  j = request.jar(),
  { sequelize } = db;

request = request.defaults({ jar: j });

const baseUrl = 'http://localhost:8888/api',
  url = `${baseUrl}/group`,
  signInUrl = `${baseUrl}/user/signin`,
  signUpUrl = `${baseUrl}/user/signup`;

describe('POST:/api/group', () => {
  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => {
      done();
    });
  });

  describe('API route that allows users create broadcast groups.', () => {
    beforeAll((done) => {
      request.post(signUpUrl, {
        form: {
          username: 'zetsu',
          email: 'zetsu@naruto.com',
          password: '12345678?'
        }
      }, (err, response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
    });

    describe('Unauthenticated access to route', () => {
      it('should return status code 403', (done) => {
        const form = {
          name: 'Tokyo Ghoul'
        };
        request.post(url, { form }, (err, res) => {
          expect(res.statusCode).toBe(403);
          done();
        });
      });
    });

    describe('Authenticated submission of form with', () => {
      beforeAll((done) => {
        const form = {
          username: 'zetsu',
          password: '12345678?',
        };
        request.post(signInUrl, { form }, (err, res) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      });

      describe('no name', () => {
        it('should return status code 400', (done) => {
          const form = {
            purpose: 'How to live with humans'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('no purpose', () => {
        it('should return status code 201', (done) => {
          const form = {
            name: 'Tokyo Ghoul S1',
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });

      describe('name longer than 22 characters', () => {
        it('should return status code 400', (done) => {
          const form = {
            name: '1111111111111111111111122',
            purpose: 'How to live with humans'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('purpose longer than  50 characters', () => {
        it('should return status code 400', (done) => {
          const form = {
            name: 'Tokyo Ghoul',
            purpose: '11111111111111111111111111111111111111111111111111150'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('name less than 23 characters and purpose not greater than 50 characters', () => {
        it('should return status code 201', (done) => {
          const form = {
            name: 'Tokyo Ghoul',
            purpose: 'How to live with humans'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });

      describe('name identical to another group', () => {
        it('should return status code 201', (done) => {
          const form = {
            name: 'Tokyo Ghoul',
            purpose: 'How to eat humans'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });

      describe('purpose identical to another group', () => {
        it('should return status code 201', (done) => {
          const form = {
            name: 'Attack on Titans',
            purpose: 'How to eat humans'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });
    });
  });
});
