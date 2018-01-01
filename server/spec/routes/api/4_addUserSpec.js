let request = require('request');
  j = request.jar();
  request = request.defaults({ jar: j });

const url = 'http://localhost:8888/api/group/1/user',
  signinUrl = 'http://localhost:8888/api/user/signin',
  form = {
    username: 'keneki',
    password: '12345678?',
  },
  registeredUsers = ['naruto', 'rukia'],
  unregisteredUsers = ['sasuke', 'orochimaru'];

describe('POST:/api/group/<group id>/user', () => {
  describe('API route that allow users add other users to groups.', () => {
    describe('Unauthenticated access to route', () => {
      it('should return status code 403', (done) => {
        const users = registeredUsers.join('');
        request.post(url, { form: { invites: users } }, (err, res, body) => {
          expect(res.statusCode).toBe(403);
          done();
        });
      });
    });

    describe('Authenticated submission of form with', () => {
      describe('signed in user', () => {
        it('should return status code 200', (done) => {
          request.post(signinUrl, { form }, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('null invites field', () => {
        it('should return status code 400', (done) => {
            request.post(url, { form: {} }, (err, response, body) => {
              expect(response.statusCode).toBe(500);
              done();
            });
        });
      });

      describe('empty string invites field', () => {
        it('should return status code 200', (done) => {
          request.post(url, { form: { invites: '  ' } }, (err, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('single unregistered user invites field', () => {
        it('should return status code 200', (done) => {
          const user = unregisteredUsers[0];
          request.post(url, { form: { invites: user } }, (err, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('single registered user invites field', () => {
        it('should return status code 200', (done) => {
          const user = registeredUsers[0];
          request.post(url, { form: { invites: user } }, (err, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('multiple registered users invites field', () => {
        it('should return status code 200', (done) => {
          const users = registeredUsers.join('');
          request.post(url, { form: { invites: users } }, (err, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('multiple registered and unregistered users invites field', () => {
        it('should return status code 200', (done) => {
          const users = registeredUsers.join('').concat(unregisteredUsers.join(''));
          request.post(url, { form: { invites: users } }, (err, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('invites to group not created by user', () => {
        it('should return status code 401', (done) => {
          const user = registeredUsers[0],
            notUserGroup = 'http://localhost:8888/api/group/8/user';
          request.post(notUserGroup, { form: { invites: user } }, (err, response, body) => {
            expect(response.statusCode).toBe(401);
            done();
          });
        });
      });
    });
  });
});
