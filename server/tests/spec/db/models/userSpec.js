const db = require('../../../../db/models');

const { User, Group, sequelize } = db;

describe('User database model:', () => {
  describe('username with', () => {
    it('null value', (done) => {
      User.create({
        username: null,
        email: 'valid@email.who',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('undefined value', (done) => {
      User.create({
        username: undefined,
        email: '_valid@email.com',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string', (done) => {
      User.create({
        username: ' ',
        email: 'valid1@email.com',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', (done) => {
      User.create({
        username: '',
        email: 'valid@email.com',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non alphanumeric string excluding underscore', (done) => {
      User.create({
        username: 'invalid username',
        email: '2valid_@email.com',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('email with', () => {
    it('null value', (done) => {
      User.create({
        username: 'validusername',
        email: null,
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string', (done) => {
      User.create({
        username: 'valid_username',
        email: ' ',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', (done) => {
      User.create({
        username: 'validusername1',
        email: '',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non email format', (done) => {
      User.create({
        username: '_valid_username',
        email: 'invalidemail.com',
        password: '12345678'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('password with', () => {
    it('null value', (done) => {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: null
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('undefined value', (done) => {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: undefined
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string', (done) => {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '   '
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', (done) => {
      User.create({
        username: '',
        email: 'valid@email.com',
        password: ''
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('length less than 8', (done) => {
      User.create({
        username: 'invalid-username',
        email: '2valid_@email.com',
        password: '1234567'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('length greater than 32', (done) => {
      User.create({
        username: 'invalid-username',
        email: '2valid_@email.com',
        password: '123456712345671234567123456712345671234567'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });
  describe('get user groups', () => {
    afterAll((done) => {
      sequelize.sync({ force: true }).then(() => done());
    });
    it('should be truthy', (done) => {
      let user;
      User.create({
        username: 'validname',
        email: 'valid@email.com',
        password: '12345678'
      }).then((newuser) => {
        user = newuser;
        Group.create({
          name: 'Valid Group'
        }).then((group) => {
          group.addMember(user).then(() => {
            user.getGroups().then((found) => {
              expect(found).toBeTruthy();
              done();
            });
          });
        });
      });
    });
  });
});
