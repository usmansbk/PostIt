const request = require('request'),
  url = 'http://localhost:8888/api/user/signup';

describe('POST:/api/user/signup', () => {
  describe('API route for users to create accounts', () => {
    it('returns status code 201', () => {
      request.post(url, {
        username: 'ichigo',
        password: 'bankai',
        email: 'shinigami@subtitute.com'
      });
    }, (err, res, body) => {
      expect(res.statusCode).toBe(201);
    }); 
  });
});
