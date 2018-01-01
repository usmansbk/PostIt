let request = require('request'),
  j = request.jar();
  request = request.defaults({ jar: j });

const baseUrl = 'http://localhost:8888/api/group/',
  endPoint = '/messages',
  signinUrl = 'http://localhost:8888/api/user/signin',
  url = `${baseUrl}1${endPoint}`;

describe('GET:/api/group/<group id>/messages', () => {
  describe('API route that allows a logged in user retrieve messages that have been posted to groups he/she belongs to.', () => {
    describe('Unauthenticated user trying to retrieve messages', () => {
      it('should return a status code of 403', (done) => {
        request(url, (err, res, body) => {
          expect(res.statusCode).toBe(403);
          done();
        });
      });
    });

    describe('Signing in to database', () => {
      it('should return status code of 200', (done) => {
        request.post(signinUrl, { form: { username: 'keneki', password: '12345678?' } }, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      });
    });

    describe('Authenticated user trying to retrieve messages from', () => {
      describe('group user belong to', () => {
        it('should return a status code of 200', (done) => {
          request(url, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
          });
        });
      });

      describe("group user doesn't belong to", () => {
        it('should return a status code of 401', (done) => {
          const url = `${baseUrl}100${endPoint}`;
          request(url, (err, res, body) => {
            expect(res.statusCode).toBe(401);
            done();
          });
        });
      });
    });
  });
});
