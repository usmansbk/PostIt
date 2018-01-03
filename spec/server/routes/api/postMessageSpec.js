let request = require('request');
const db = require('../../../../server/db/models'),
  { sequelize } = db,
  j = request.jar();

request = request.defaults({ jar: j });

const baseUrl = 'http://localhost:8888/api',
  endPoint = '/message',
  url = `${baseUrl}/group`,
  signin = `${baseUrl}/user/signin`,
  signUpUrl = `${baseUrl}/user/signup`,
  message = 'Hello World!';

let groupId;

describe('POST:/api/group/<group id>/message', () => {
  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => {
      done();
    });
  });

  beforeAll((done) => {
    request.post(signUpUrl, {
      form: {
        username: 'kurosaki',
        email: 'ichigo@bleach.com',
        password: '12345678?'
      }
    }, () => {
      done();
    });
  });
  describe('Unauthenticated access to route', () => {
    it('should return status code 403', (done) => {
      request.post(url, { form: { message } }, (err, res) => {
        expect(res.statusCode).toBe(403);
        done();
      });
    });
  });

  describe('Authenticated submission of form with', () => {
    beforeAll((done) => {
      request.post(signin, { form: { username: 'kurosaki', password: '12345678?' } }, () => {
        request.post(url, { form: { name: 'Soul Society' } }, (err, res, body) => {
          body = JSON.parse(body);
          groupId = body.data.result.id;
          done();
        });
      });
    });

    describe('no message field', () => {
      it('should return status code 400', (done) => {
        request.post(url, { form: { } }, (err, res) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      });
    });

    describe('empty string message', () => {
      it('should return status code 400', (done) => {
        request.post(url, { form: { message: '  ' } }, (err, res) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      });
    });

    describe('message to a group user in not a member of', () => {
      const groupUrl = `${url}/${groupId + 1}/message`;
      it('should return status code 401', (done) => {
        request.post(groupUrl, { form: { message } }, (err, res) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      });
    });

    describe('message to a group user belong to', () => {
      it('should return status code 201', (done) => {
        const groupUrl = `${url}/${groupId}${endPoint}`;
        request.post(groupUrl, { form: { message } }, (err, res, body) => {
          body = JSON.parse(body);
          expect(res.statusCode).toBe(201);
          expect(body.data.message).toBe(message);
          done();
        });
      });
    });
  });
});
