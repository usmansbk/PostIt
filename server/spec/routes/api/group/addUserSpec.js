const request = require('request'),
  baseUrl = 'http://localhost:8888/api/group/',
  endPoint = '/user';

describe('POST:/api/group/<group id>/user', () => {
  describe('API route that allow users add other users to groups.', () => {
    describe('Making a GET request to route', () => {
      it('should return status code 405', (done) => {
        request.get(`${baseUrl}1${endPoint}`, (err, res) => {
          expect(res.statusCode).toBe(405);
          done();
        });
      });
    });

    describe('Unauthenticated access to route', () => {

    });

    describe('Authenticated submission of form with', () => {
      describe('null invites field', () => {
      });

      describe('empty string invites field', () => {
      });

      describe('single unregistered user invites field', () => {
      });

      describe('single registered user invites field', () => {
      });

      describe('multiple registered users invites field', () => {
      });

      describe('multiple registered and unregistered users invites field', () => {
      });

      describe('invites to group not created by user', () => {
      });
    });
  });
});
