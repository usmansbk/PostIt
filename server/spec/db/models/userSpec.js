const db = require('../../../db/models');

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

  describe('optional firstname with', () => {
    afterEach((done) => {
      User.sync({ force: true }).then(() => done());
    });

    it('null value', (done) => {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: 'valid-password',
        firstname: null
      }).then((user) => {
        expect(!!user).toBeTruthy();
        done();
      });
    });

    it('undefined value', (done) => {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: 'valid*passw0rd',
        firstname: undefined
      }).then((user) => {
        expect(!!user).toBeTruthy();
        done();
      });
    });

    it('blank space string', (done) => {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '123Valid?Password',
        firstname: '  '
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', (done) => {
      User.create({
        username: 'valid_username2',
        email: 'valid@email.com',
        password: '12345678password',
        firstname: ''
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non alphabet characters', (done) => {
      User.create({
        username: 'invalid-username',
        email: '2valid_@email.com',
        password: '1234567'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('optional surname with', () => {
    afterEach((done) => {
      User.sync({ force: true }).then(() => done());
    });

    it('null value', (done) => {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: 'valid-password',
        firstname: null
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('undefined value', (done) => {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: 'valid*passw0rd',
        firstname: undefined
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('blank space string', (done) => {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '123Valid?Password',
        firstname: '  '
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', (done) => {
      User.create({
        username: 'valid_username2',
        email: 'valid@email.com',
        password: '12345678password',
        firstname: ''
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non alphabet characters', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname2'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('optional gender with', () => {
    afterEach((done) => {
      User.sync({ force: true }).then(() => done());
    });

    it('null value', (done) => {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: 'valid-password',
        firstname: 'validusername',
        gender: null
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('undefined value', (done) => {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: 'valid*passw0rd',
        firstname: 'validname',
        surname: 'validname',
        gender: undefined
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('blank space string', (done) => {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '123Valid?Password',
        firstname: 'validname',
        surname: 'validname',
        gender: ' '
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', (done) => {
      User.create({
        username: 'valid_username2',
        email: 'valid@email.com',
        password: '12345678password',
        firstname: 'validname',
        surname: 'validname',
        gender: ''
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('male value', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'male'
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('female value', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female'
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });
  });

  describe('optional birthday with', () => {
    afterEach((done) => {
      User.sync({ force: true }).then(() => done());
    });

    it('YYYY-MM-DD format', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-02'
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('time format YYYY-MM-DD HH:MI:SS', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-02 20:48:22'
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('YYYY, Mmm Dd format', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018, Jan 02'
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('fake date: 2018-01-32', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-32'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('fake date: 2018-11-32', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-32'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });
    it('YYYY,Mmm-Dd format', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018,01-02'
      }).then((user) => {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('YYYY/Mmm/Dd format', (done) => {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018/01/02'
      }).then((user) => {
        expect(user).toBeTruthy();
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
