'use strict';

var db = require('../../../../../db/models');

var Post = db.Post,
    User = db.User,
    sequelize = db.sequelize;


var author = void 0,
    newPost = void 0;

describe('Post database model.', function () {
  beforeAll(function (done) {
    User.create({
      username: 'saitama',
      email: 'capedbaldy@onepunchman.com',
      password: '12345678',
      gender: 'male'
    }).then(function (user) {
      author = user;
      done();
    });
  });

  afterAll(function (done) {
    sequelize.sync({ force: true }).then(function () {
      return done();
    });
  });

  describe('message property with', function () {
    it('null value', function (done) {
      Post.create({ message: null }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string value', function (done) {
      Post.create({ message: '' }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string value', function (done) {
      Post.create({ message: '  ' }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('valid string value', function (done) {
      Post.build({ message: 'How do i kill a mosquito?' }).save().then(function (post) {
        newPost = post;
        expect(post).toBeTruthy();
        done();
      });
    });
  });

  describe('set author to', function () {
    it('null value', function (done) {
      newPost.setAuthor(null).then(function (post) {
        expect(post).toBeTruthy();
        done();
      });
    });

    it('generic object', function (done) {
      var obj = {};
      newPost.setAuthor(obj).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('user object', function (done) {
      newPost.setAuthor(author).then(function (post) {
        expect(post).toBeTruthy();
        post.getAuthor().then(function (auth) {
          expect(auth).toBeTruthy();
          done();
        });
      });
    });
  });
});