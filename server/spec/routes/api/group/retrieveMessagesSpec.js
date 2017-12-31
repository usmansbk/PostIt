const request = require('request'),
  baseUrl = 'http://localhost:8888/api/group/',
  endPoint = 'messages',
  user = 'naruto',
  memberGroup = 2,
  nonMemberGroup = 3;

describe('GET:/api/group/<group id>/messages', () => {
  describe('An API route that allows a logged in user retrieve messages that have been posted to groups he/she belongs to', () => {

    describe('Logged out user user', () => {
      it('should not return 401', (done) => {
        const url = `${baseUrl}${memberGroup}/${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      });
    });

    decribe('Unregistered user', () => {
      it('should not return 401', (done) => {
        const url = `${baseUrl}${memberGroup}/${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });       
      });
    });

    describe('Logged in non group member', () => {
      it('should not return 401', (done) => {
        const url = `${baseUrl}${nonMemberGroup}/${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      });
    });

    describe('Logged in group member', () => {
      it('should return 200', (done) => {
        const url = `${baseUrl}${memberGroup}/${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      });
    });

    describe('Posting a request to route', () => {
      it('should return 405', (done) => {
        const url = `${baseUrl}${memberGroup}/${endPoint}`;
        request.post({ url }, (err, res, body) => {
          expect(res.statusCode).toBe(405);
          done();
        });
      });
    });


  });
});
