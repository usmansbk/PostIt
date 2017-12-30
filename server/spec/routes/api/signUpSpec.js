const request = require('request'),
  url = 'http://localhost:8888/api/user/signup';

describe('POST:/api/user/signup', () => {
  describe('API route for users to create accounts', () => {
    it('Should return status code 201', (done) => {
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

  describe('password length not at least 8 characters long', () => {
    it('Should not return status code 201', (done) => {
      const options = {
        username: 'uzumaki',
        password: '1234567',
        email: 'shinobi@hokage.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).not.toBe(201);
        done();
      });
    });
  });

  describe('Not using a unique username', () => {
    it('Should not return status code 201', (done) => {
      const options = {
        username: 'kurosaki',
        password: '123456789',
        email: 'shinigami2@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).not.toEqual(201);
        done();
      });
    });
  });

  describe('Not using a unique email', () => {
    it('Should not return status code 201', (done) => {
      const options = {
        username: 'kurosaki3',
        password: 'bankai3',
        email: 'shinigami@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).not.toEqual(201);
        done();
      });
    });
  });

  describe('Not using a unique password', () => {
    it('Should return status code 201', (done) => {
      const options = {
        username: 'kurosaki3',
        password: '12345678',
        email: 'shinigami3@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(201);
        done();
      });
    });
  });

  describe('Not passing in a password', () => {
    it('Should return status code 400', (done) => {
      const options = {
        username: 'kurosaki3',
        email: 'shinigami3@subtitute.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('Not passing in a username', () => {
    it('Should return status code 400', (done) => {
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

  describe('Not passing in an email', () => {
    it('Should return status code 400', (done) => {
      const options = {
        username: 'ichigo',
        password: 'kurosaki3',
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('firstname must only contain alphabets', () => {
    it('Should return status code 400', (done) => {
      const options = {
        firstname: 'rukia2',
        username: 'rukia2',
        password: 'kurosaki3',
        email: 'kunoichi@shinigami.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('surname must only contain alphabets', () => {
    it('Should return status code 400', (done) => {
      const options = {
        firstname: 'rukia',
        surname: 'byakuyaku2',
        username: 'rukia2',
        password: 'kurosaki3',
        email: 'kunoichi@shinigami.com'
      };
      request.post({ url, form: options }, (err, res, body) => {
        expect(res.statusCode).toEqual(400);
        done();
      });
    });
  });

  describe('surname must only contain alphabets', () => {
    it('Should return status code 201', (done) => {
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

  describe('gender must be male or female only', () => {
    it('Should return status code 400', (done) => {
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

  describe('gender must be male or female only', () => {
    it('Should return status code 400', (done) => {
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
