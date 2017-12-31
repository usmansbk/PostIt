const request = require('request'),
  url = 'http://localhost:8888/api/group';


describe('POST:/api/group', () => {
  describe('An API route that allows users create broadcast groups', () => {
    describe('Unregistered user', () => {
      it('should return status code 401', (done) => {
        request.post({ url, form: { username: 'zetsu' } }, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      }); 
    });

    describe('Register user', () => {
      it('should signup a new user', (done) => {
        request.post({
          url: 'http://localhost:8888/api/user/signup',
          form: {
            username: 'zetsu',
            password: '12345678',
            email: 'blackzetsu@naruto.com'
          }
        }, (err, res, body) => done());
      });
    });

    describe('Registered user', () => {
      it('should return status code 201', (done) => {
        request.post({
          url,
          form: {
            username: 'zetsu',
            name: 'PlantsPlan',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(201);
          done();
        });
      }); 
    });

    describe('Not passing a username', () => {
      it('should return status code 401', (done) => {
        request.post({
          url,
          form: {
            name: 'PlantsPlan',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      }); 
    });

    describe('Not passing a name', () => {
      it('should return status code 400', (done) => {
        request.post({
          url,
          form: {
            username: 'zetsu',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      }); 
    });

    describe('Passing used name', () => {
      it('should return status code 201', (done) => {
        request.post({
          url,
          form: {
            username: 'zetsu',
            name: 'PlantsPlan',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(201);
          done();
        });
      }); 
    });

    describe('Not passing purpose', () => {
      it('should return status code 201', (done) => {
        request.post({
          url,
          form: {
            username: 'zetsu',
            name: 'PlantsPlan-B',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(201);
          done();
        });
      }); 
    });

    describe('Passing an empty string name', () => {
      it('should return status code 400', (done) => {
        request.post({
          url,
          form: {
            username: 'zetsu',
            name: '',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      }); 
    });;

    describe('Not passing any form data', () => {
      it('should not return status code 201', (done) => {
        request.post({
          url
        }, (err, res, body) => {
          expect(res.statusCode).not.toBe(400);
          done();
        });
      }); 
    });

  });
});
