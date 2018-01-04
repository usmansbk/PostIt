'use strict';

var db = require('../../../../../db/models');

var User = db.User,
    Group = db.Group,
    sequelize = db.sequelize;


describe('User database model:', function () {
  describe('username with', function () {
    it('null value', function (done) {
      User.create({
        username: null,
        email: 'valid@email.who',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('undefined value', function (done) {
      User.create({
        username: undefined,
        email: '_valid@email.com',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string', function (done) {
      User.create({
        username: ' ',
        email: 'valid1@email.com',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', function (done) {
      User.create({
        username: '',
        email: 'valid@email.com',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non alphanumeric string excluding underscore', function (done) {
      User.create({
        username: 'invalid username',
        email: '2valid_@email.com',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('email with', function () {
    it('null value', function (done) {
      User.create({
        username: 'validusername',
        email: null,
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string', function (done) {
      User.create({
        username: 'valid_username',
        email: ' ',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', function (done) {
      User.create({
        username: 'validusername1',
        email: '',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non email format', function (done) {
      User.create({
        username: '_valid_username',
        email: 'invalidemail.com',
        password: '12345678'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('password with', function () {
    it('null value', function (done) {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: null
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('undefined value', function (done) {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: undefined
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string', function (done) {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '   '
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', function (done) {
      User.create({
        username: '',
        email: 'valid@email.com',
        password: ''
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('length less than 8', function (done) {
      User.create({
        username: 'invalid-username',
        email: '2valid_@email.com',
        password: '1234567'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('length greater than 32', function (done) {
      User.create({
        username: 'invalid-username',
        email: '2valid_@email.com',
        password: '123456712345671234567123456712345671234567'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('optional firstname with', function () {
    afterEach(function (done) {
      User.sync({ force: true }).then(function () {
        return done();
      });
    });

    it('null value', function (done) {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: 'valid-password',
        firstname: null
      }).then(function (user) {
        expect(!!user).toBeTruthy();
        done();
      });
    });

    it('undefined value', function (done) {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: 'valid*passw0rd',
        firstname: undefined
      }).then(function (user) {
        expect(!!user).toBeTruthy();
        done();
      });
    });

    it('blank space string', function (done) {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '123Valid?Password',
        firstname: '  '
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', function (done) {
      User.create({
        username: 'valid_username2',
        email: 'valid@email.com',
        password: '12345678password',
        firstname: ''
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non alphabet characters', function (done) {
      User.create({
        username: 'invalid-username',
        email: '2valid_@email.com',
        password: '1234567'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('optional surname with', function () {
    afterEach(function (done) {
      User.sync({ force: true }).then(function () {
        return done();
      });
    });

    it('null value', function (done) {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: 'valid-password',
        firstname: null
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('undefined value', function (done) {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: 'valid*passw0rd',
        firstname: undefined
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('blank space string', function (done) {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '123Valid?Password',
        firstname: '  '
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', function (done) {
      User.create({
        username: 'valid_username2',
        email: 'valid@email.com',
        password: '12345678password',
        firstname: ''
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('non alphabet characters', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname2'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });
  });

  describe('optional gender with', function () {
    afterEach(function (done) {
      User.sync({ force: true }).then(function () {
        return done();
      });
    });

    it('null value', function (done) {
      User.create({
        username: 'validusername',
        email: 'valid@email.who',
        password: 'valid-password',
        firstname: 'validusername',
        gender: null
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('undefined value', function (done) {
      User.create({
        username: 'valid_username',
        email: '_valid@email.com',
        password: 'valid*passw0rd',
        firstname: 'validname',
        surname: 'validname',
        gender: undefined
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('blank space string', function (done) {
      User.create({
        username: '_validusername',
        email: 'valid1@email.com',
        password: '123Valid?Password',
        firstname: 'validname',
        surname: 'validname',
        gender: ' '
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string', function (done) {
      User.create({
        username: 'valid_username2',
        email: 'valid@email.com',
        password: '12345678password',
        firstname: 'validname',
        surname: 'validname',
        gender: ''
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('male value', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'male'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('female value', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });
  });

  describe('optional birthday with', function () {
    afterEach(function (done) {
      User.sync({ force: true }).then(function () {
        return done();
      });
    });

    it('YYYY-MM-DD format', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-02'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('time format YYYY-MM-DD HH:MI:SS', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-02 20:48:22'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('YYYY, Mmm Dd format', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018, Jan 02'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('fake date: 2018-01-32', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-32'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('fake date: 2018-11-32', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018-01-32'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });
    it('YYYY,Mmm-Dd format', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018,01-02'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });

    it('YYYY/Mmm/Dd format', function (done) {
      User.create({
        username: 'validusername',
        email: '2valid_@email.com',
        password: '12345678',
        firstname: 'validname',
        surname: 'validname',
        gender: 'female',
        birthday: '2018/01/02'
      }).then(function (user) {
        expect(user).toBeTruthy();
        done();
      });
    });
  });

  describe('get user groups', function () {
    afterAll(function (done) {
      sequelize.sync({ force: true }).then(function () {
        return done();
      });
    });
    it('should be truthy', function (done) {
      var user = void 0;
      User.create({
        username: 'validname',
        email: 'valid@email.com',
        password: '12345678'
      }).then(function (newuser) {
        user = newuser;
        Group.create({
          name: 'Valid Group'
        }).then(function (group) {
          group.addMember(user).then(function () {
            user.getGroups().then(function (found) {
              expect(found).toBeTruthy();
              done();
            });
          });
        });
      });
    });
  });
});