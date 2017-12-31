const request = require('request'),
  url = 'http://localhost:8888/api/group',
  username = 'naruto',
  unregistered = 'zetsu',
  password = '12345678'; 

describe('POST:/api/group', () => {
  describe('API route that allows users create broadcast groups.', () => {

  describe('Submitting a form with', () => {

    describe('unregistered "username"', () => {
      it('should return status code 401', (done) => {
        request.post({ url, form: { username: unregistered } }, (err, res, body) => {
          expect(res.statusCode).toBe(401);
          done();
        });
      }); 
    });

    describe('registered "username", and group "name" field', () => {
      it('should return status code 201', (done) => {
        request.post({
          url,
          form: {
            username,
            name: 'PlantsPlan',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(201);
          done();
        });
      }); 
    });

    describe('null "username" field', () => {
      it('should return status code 400', (done) => {
        request.post({
          url,
          form: {
            name: 'PlantsPlan',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      }); 
    });

    describe('group "name" field', () => {
      it('should return status code 400', (done) => {
        request.post({
          url,
          form: {
            username,
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      }); 
    });

    describe('used group "name" field', () => {
      it('should return status code 201', (done) => {
        request.post({
          url,
          form: {
            username,
            name: 'PlantsPlan',
            purpose: 'how to kill zombies',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(201);
          done();
        });
      }); 
    });

    describe('null group "purpose" field', () => {
      it('should return status code 201', (done) => {
        request.post({
          url,
          form: {
            username,
            name: 'PlantsPlan-B',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(201);
          done();
        });
      }); 
    });

    describe('empty string group "name"', () => {
      it('should return status code 400', (done) => {
        request.post({
          url,
          form: {
            username,
            name: '',
          }
        }, (err, res, body) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      }); 
    });;

    describe('empty form data', () => {
      it('should return status code 400', (done) => {
        request.post({
          url
        }, (err, res, body) => {
          expect(res.statusCode).toBe(400);
          done();
        });
      }); 
    });

  });
  });
});
