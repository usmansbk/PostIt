let request = require('request');
  j = request.jar();
  request = request.defaults({ jar: j });

const baseUrl = 'http://localhost:8888/api',
  endPoint = '/group/11/message',
  url = `${baseUrl}${endPoint}`,
  signin = `${baseUrl}/user/signin`;

describe('POST:/api/group/<group id>/message', () => {
  describe('API route that allows a logged in user post messages to created groups.', () => {
    describe('Unauthenticated access to route', () => {
      it('should return status code 403', (done) => {
        request.post(url, { form: { message: 'Hello World!' } }, (err, res, body) => {
          expect(res.statusCode).toBe(403);
          done();
        });
      });
    });

    describe('Signing in', () => {
      it('should return status code 200', (done) => {
        request.post(signin, { form: { username:'keneki', password:'12345678?' } }, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      })
    });

    describe('Authenticated submission of form with', () => {
      describe('no message field', () => {
        it('should return status code 400', (done) => {
          request.post(url, { form: { } }, (err, res, body) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('empty string message', () => {
        it('should return status code 400', (done) => {
          request.post(url, { form: { message: '  ' } }, (err, res, body) => {
            expect(res.statusCode).toBe(400);
            done();
          });
        });
      });

      describe('message to a group user in not a member of', () => {
        const url = `${baseUrl}/group/11/message`;
        it('should return status code 401', (done) => {
          request.post(url, { form: { message: 'Hello random group' } }, (err, res, body) => {
            expect(res.statusCode).toBe(401);
            done();
          });
        });
      });;

      describe('message to a group user belong to', () => {
        const url = `${baseUrl}/group/1/message`;
        it('should return status code 401', (done) => {
          request.post(url, { form: { message: 'Hello random group' } }, (err, res, body) => {
            expect(res.statusCode).toBe(201);
            done();
          });
        });
      });
    });
  });
});
