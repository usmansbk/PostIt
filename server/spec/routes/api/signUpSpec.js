const request = require('request'),
  url = 'http://localhost:8888/api/user/signup';

const db = require('../../../db/models'),
  { sequelize } = db;


describe('POST:/api/user/signup', () => {
  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => {
      done();
    });
  });

  describe('API route for users to create accounts.', () => {
    describe('Submission of form with', () => {
      describe('invalid username with', () => {
        describe('no field', () => {
          it('should return status code 400', (done) => {
            const form = {
              email: '_tokyo@ghoul.com',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('blank space string', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: '   ',
              email: '_tokyo@ghoul.com',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('non alphanumeric character excluding underscore', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'k.e-n?e*ki',
              email: '_tokyo@ghoul.com',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });
      });

      describe('invalid password with', () => {
        describe('no field', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('blank space string', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              email: '_tokyo@ghoul.com',
              password: '        '
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('length greater than 32 characters', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              email: '_tokyo@ghoul.com',
              password: '12345678-12345678-12345678-12345678'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('length less than 8 characters', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              email: '_tokyo@ghoul.com',
              password: '1234567'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });
      });

      describe('invalid email with', () => {
        describe('no field', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('blank space string', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              email: '    ',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('non email format', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              email: '_tokyoghoul.com',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });

        describe('non alphanumeric character excluding @ . _', () => {
          it('should return status code 400', (done) => {
            const form = {
              username: 'keneki',
              email: '_tokyo*@ghoul-.com',
              password: '12.3*45-abCDE?'
            };
            request.post(url, { form }, (err, res) => {
              expect(res.statusCode).toBe(400);
              done();
            });
          });
        });
      });

      describe('available username and password', () => {
        it('should return status code 201', (done) => {
          const form = {
            username: 'keneki',
            email: '_tokyo@ghoul.com',
            password: '12345678?'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });

      describe('unavailable username', () => {
        it('should return status code 400', (done) => {
          const form = {
            username: 'keneki',
            email: '_tokyo@ghoul.com',
            password: '12345678?'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('optional gender value not [male or female]', () => {
        it('should return status code 400', (done) => {
          const form = {
            username: 'rukia',
            email: 'shinigami@captain.com',
            password: '12345678?',
            gender: 'spirit'
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('optional gender value [female]', () => {
        it('should return status code 201', (done) => {
          const form = {
            username: 'rukia',
            email: 'shinigami@captain.com',
            password: '12345678?',
            gender: 'female',
          };
          request.post(url, { form }, (err, res) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });

      describe('optional gender value [male]', () => {
        it('should return status code 201', (done) => {
          const form = {
            username: 'naruto',
            email: 'shinobi@hokage.com',
            password: '12345678?',
            gender: 'male',
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
