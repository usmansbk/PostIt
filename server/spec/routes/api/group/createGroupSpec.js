const request = require('request'),
  url = 'http://localhost:8888/api/group';

describe('POST:/api/group', () => {
  describe('API route that allows users create broadcast groups.', () => {

    describe('Making a GET request to route', () => {
      it('should return a status code of 405', (done) => {
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(405);
          done();
        });
      });
    });
 
    describe('Unauthenticated access to route', () => {

    });

    describe('Authenticated submission of form with', () => {

      describe('no name', () => {
      });

      describe('no purpose', () => {
      });

      describe('name longer than 22 characters', () => {
      });

      describe('purpose longer than  50 characters', () => {
      });

      describe('name less than 23 characters', () => {
      });

      describe('purpose less than 51 characters', () => {
      });

      describe('name identical to another group', () => {
      });

      describe('purpose identical to another group', () => {
      });

    });

  });
});
