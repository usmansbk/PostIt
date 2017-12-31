const request = require('request'),
  baseUrl = 'http://localhost:8888/api/group/',
  endPoint = '/messages',
  user = 'naruto',
  memberGroup = 2,
  nonMemberGroup = 3;

describe('GET:/api/group/<group id>/messages', () => {
  describe('API route that allows a logged in user retrieve messages that have been posted to groups he/she belongs to.', () => {

    decribe('Unregistered user', () => {
      it('should return 401', (done) => {
        const url = `${baseUrl}${memberGroup}${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });       
      });
    });


    describe('Logged out user that is a member of a group', () => {
      it('should return 401', (done) => {
        const url = `${baseUrl}${memberGroup}${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      });
    });

    describe('Logged in user that is not a member of a group', () => {
      it('should return 401', (done) => {
        const url = `${baseUrl}${nonMemberGroup}${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      });
    });

    describe('Logged in user that is a member of a group', () => {
      it('should return 200', (done) => {
        const url = `${baseUrl}${memberGroup}${endPoint}`;
        request.get(url, (err, res, body) => {
          expect(res.statusCode).toBe(200);
          done();
        });
      });
    });

    describe('Making a post request to the route', () => {
      it('should return 405', (done) => {
        const url = `${baseUrl}${memberGroup}${endPoint}`;
        request.post({ url }, (err, res, body) => {
          expect(res.statusCode).toBe(405);
          done();
        });
      });
    });

  });
});
