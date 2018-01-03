let request = require('request');
const helpers = require('../../helpers');
const db = require('../../../db/models'),
  j = request.jar(),
  { sequelize } = db;

request = request.defaults({ jar: j });

const baseUrl = 'http://localhost:8888/api/',
  { registerUsers, getUsernames } = helpers.util,
  url = `${baseUrl}group/`,
  endPoint = '/user',
  signInUrl = `${baseUrl}user/signin`,
  signUpUrl = `${baseUrl}user/signup`,
  userFormData = {
    username: 'vash',
    password: '12345678?',
    email: 'vash@trigun.com'
  },
  registeredUsers = [
    {
      username: 'naruto',
      password: '12345678',
      email: 'naruto@shinobi.com',
    },
    {
      username: 'rukia',
      password: '12345678',
      email: 'rukia@shinigami.com'
    }
  ],
  unregisteredUsers = ['sasuke', 'orochimaru'];

let groupId, groupUrl;

describe('POST:/api/group/<group id>/user', () => {
  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => {
      done();
    });
  });

  describe('API route that allow users add other users to groups.', () => {
    beforeAll((done) => {
      request.post(signUpUrl, { form: userFormData }, () => {
        registerUsers(registeredUsers, request, signUpUrl);
        done();
      });
    });

    describe('Unauthenticated access to route', () => {
      it('should return status code 403', (done) => {
        const users = registeredUsers.join('');
        request.post(url, { form: { invites: users } }, (err, res) => {
          expect(res.statusCode).toBe(403);
          done();
        });
      });
    });

    describe('Authenticated submission of form with', () => {
      beforeAll((done) => {
        request.post(signInUrl, { form: userFormData }, () => {
          request.post(url, { form: { name: 'Project Seed' } }, (err, res, body) => {
            body = JSON.parse(body);
            groupId = body.data.result.id;
            groupUrl = `${url}${groupId}${endPoint}`;
            done();
          });
        });
      });

      describe('null invites field', () => {
        it('should return status code 400', (done) => {
          request.post(groupUrl, { form: {} }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('empty string invites field', () => {
        it('should return status code 400', (done) => {
          request.post(groupUrl, { form: { invites: '  ' } }, (err, res) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('single unregistered user invites field', () => {
        it('should return status code 200', (done) => {
          const user = unregisteredUsers[0];
          request.post(groupUrl, { form: { invites: user } }, (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('single registered user invites field', () => {
        it('should return status code 200', (done) => {
          const user = registeredUsers[0].username;
          request.post(groupUrl, { form: { invites: user } }, (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('multiple registered users invites field', () => {
        it('should return status code 200', (done) => {
          const users = getUsernames(registeredUsers);
          request.post(groupUrl, { form: { invites: users } }, (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('multiple registered and unregistered users invites field', () => {
        it('should return status code 200', (done) => {
          const users = getUsernames(registeredUsers).concat(unregisteredUsers.join(''));
          request.post(groupUrl, { form: { invites: users } }, (err, res) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });

      describe('invites to group not created by user', () => {
        it('should return status code 401', (done) => {
          const user = registeredUsers[0].username,
            notUserGroup = `${url}${groupId + 1}${endPoint}`;
          request.post(notUserGroup, { form: { invites: user } }, (err, res) => {
            expect(res.statusCode).toBe(401);
            done();
          });
        });
      });
    });
  });
});
