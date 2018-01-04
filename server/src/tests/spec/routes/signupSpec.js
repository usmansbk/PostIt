import request from 'supertest';
import app from '../../../server';

describe('POST /api/user/signup', () => {
  it('repond with json', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });
});
