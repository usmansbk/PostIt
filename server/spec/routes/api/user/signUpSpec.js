const request = require('request'),
  url = 'http://localhost:8888/api/user/signup';

describe('POST:/api/user/signup', () => {

  describe('API route for users to create accounts.', () => {
  describe('Submitting a form with', () => {

  describe('valid username, email, and password', () => {
    it('should return status code 201', (done) => {
      const options = {
        username: 'kurosaki',
        password: '12345678',
        email: 'shinigami@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toBe(201);
        done();
      });
    });
  });

  describe('password less than 8 characters', () => {
    it('should return status code 400', (done) => {
      const options = {
        username: 'uzumaki',
        password: '1234567',
        email: 'shinobi@hokage.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });

  describe('empty string username', () => {
    it('should return status code 400', (done) => {
      const options = {
        username: '',
        password: '1234567',
        email: 'shinobi@hokage.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toBe(400);
        done();
      });
    });
  });


  describe('unavailable username', () => {
    it('should return status code 400', (done) => {
      const options = {
        username: 'kurosaki',
        password: '12345678',
        email: 'shinigami2@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('unavailable email', () => {
    it('should not return status code 201', (done) => {
      const options = {
        username: 'kuchiki',
        password: '12345678',
        email: 'shinigami@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('duplicate password in database', () => {
    it('should return status code 201', (done) => {
      const options = {
        username: 'commander',
        password: '12345678',
        email: 'shinigami@commander.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(201);
        done();
      });
    });
  });

  describe('null password', () => {
    it('should return status code 400', (done) => {
      const options = {
        username: 'zaraki',
        email: 'shinigami@captain.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('null username', () => {
    it('should return status code 400', (done) => {
      const options = {
        password: 'kurosaki3',
        email: 'shinigami3@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('null email', () => {
    it('should return status code 400', (done) => {
      const options = {
        username: 'ichigo',
        password: '12345678',
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('"firstname" field containing non alphabets', () => {
    it('should return status code 400', (done) => {
      const options = {
        firstname: 'rukia2',
        username: 'rukia',
        password: '12345678',
        email: 'kunoichi@shinigami.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('"surname" field containing non alphabets', () => {
    it('should return status code 400', (done) => {
      const options = {
        firstname: 'rukia',
        surname: 'byakuyaku2',
        username: 'rukia',
        password: '12345678',
        email: 'kunoichi@shinigami.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('"surname" containing only alphabets', () => {
    it('should return status code 201', (done) => {
      const options = {
        firstname: 'rukia',
        surname: 'byakuyaku',
        username: 'rukia',
        password: '12345678',
        email: 'kunoichi@shinigami.com',
        gender: 'female'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(201);
        done();
      });
    });
  });

  describe('optional gender value not [male or female]', () => {
    it('should return status code 400', (done) => {
      const options = {
        firstname: 'Monkey',
        surname: 'Luffy',
        username: 'mugiwara',
        password: '11111111',
        email: 'pirate@king.com',
        gender: 'rubberman',
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('optional gender value [male or female] only', () => {
    it('should return status code 400', (done) => {
      const options = {
        firstname: 'Natsu',
        surname: 'Dragneel',
        username: 'end',
        password: '12345678',
        email: 'dragon@slayer.com',
        gender: 'male',
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(201);
        done();
      });
    });
  });

  });
  });
}); 
