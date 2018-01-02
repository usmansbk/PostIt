let request = require('request');
const db = require('../../../db/models'),
  { sequelize } = db,
  j = request.jar();

request = request.defaults({ jar: j });

const baseUrl = 'http://localhost:8888/api',
  url = `${baseUrl}/group/`,
  endPoint = '/messages',
  signInUrl = `${baseUrl}/user/signin`,
  signUpUrl = `${baseUrl}/user/signup`,
  message = 'Hello World!';

let groupId, groupUrl;

describe('GET:/api/group/<group id>/messages', () => {
  beforeAll((done) => {
    request.post(signUpUrl, {
      form: {
        username: 'itachi',
        email: 'itachi@naruto.com',
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

  describe('Unauthenticated user trying to retrieve messages', () => {
    it('should return a status code of 403', (done) => {
      const randomGroupUrl = `${url}0${endPoint}`;
      request(randomGroupUrl, (err, res) => {
        expect(res.statusCode).toBe(403);
        done();
      });
    });
  });

  describe('Retrieving message from', () => {
    beforeAll((done) => {
      request.post(signInUrl, { form: { username: 'itachi', password: '12345678?' } }, () => {
        request.post(url, { form: { name: 'Akatsuki' } }, (err, res, body) => {
          body = JSON.parse(body);
          groupId = body.data.result.id;
          groupUrl = `${url}${groupId}${endPoint}`;
          const postUrl = `${url}${groupId}/message`;
          request.post(postUrl, { form: { message } }, () => {
            done();
          });
        });
      });
    });

    describe('group user belong to', () => {
      it('should return a status code of 200', (done) => {
        request(groupUrl, (err, res, body) => {
          body = JSON.parse(body);
          const { posts } = body.data;
          expect(res.statusCode).toBe(200);
          expect(posts[0].message).toBe(message);
          done();
        });
      });
    });

    describe("group user doesn't belong to", () => {
      it('should return a status code of 401', (done) => {
        const postUrl = `${url}${groupId + 1}${endPoint}`;
        request(postUrl, (err, res) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      });
    });
  });
});
