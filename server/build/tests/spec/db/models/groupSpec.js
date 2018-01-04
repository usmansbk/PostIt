'use strict';

var db = require('../../../../../db/models');
var helpers = require('../../helpers');

var _helpers$seed = helpers.seed,
    users = _helpers$seed.users,
    posts = _helpers$seed.posts;
var Group = db.Group,
    User = db.User,
    Post = db.Post,
    sequelize = db.sequelize;


var group = void 0,
    userModels = void 0,
    postModels = void 0;

describe('Group database model', function () {
  beforeAll(function (done) {
    Group.create({ name: 'valid' }).then(function (newGroup) {
      Post.bulkCreate(posts).then(function () {
        return Post.findAll();
      }).then(function (foundPosts) {
        postModels = foundPosts;
        User.bulkCreate(users).then(function () {
          return User.findAll();
        }).then(function (foundUsers) {
          userModels = foundUsers;
          done();
        });
      });
      group = newGroup;
    });
  });

  afterAll(function (done) {
    sequelize.sync({ force: true }).then(function () {
      return done();
    });
  });

  describe('Create group with', function () {
    afterEach(function (done) {
      Group.sync({ force: true }).then(function () {
        return done();
      });
    });

    it('null name value', function (done) {
      Group.create({ name: null }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string name value', function (done) {
      Group.create({ name: '' }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank string name value', function (done) {
      Group.create({ name: '  ' }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('name longer than 22 characters', function (done) {
      Group.create({
        name: 'Vaaaaaaaaaaaaaaaalid Name'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('purpose longer than 50 characters', function (done) {
      Group.create({
        name: 'Valid Name',
        purpose: '0123456789-0123456789-0123456789-0123456789-0123456789-'
      }).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('null purpose value', function (done) {
      Group.create({ name: 'Valid Name', purpose: null }).then(function (newGroup) {
        expect(newGroup).toBeTruthy();
        done();
      });
    });

    it('blank purpose value', function (done) {
      Group.create({ name: 'Valid Name', purpose: '  ' }).then(function (newGroup) {
        expect(newGroup).toBeTruthy();
        done();
      });
    });
  });

  describe('add post with', function () {
    it('null value', function (done) {
      group.addPost(null).then(function (post) {
        expect(post).toBeFalsy();
        done();
      });
    });

    it('generic object value', function (done) {
      group.addPost({}).catch(function (error) {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('post model object', function (done) {
      group.addPost(postModels[0]).then(function (post) {
        expect(post).toBeTruthy();
        done();
      });
    });

    it('array of post models', function (done) {
      group.setPosts(postModels).then(function (associatedPosts) {
        expect(associatedPosts).toBeTruthy();
        done();
      });
    });
  });

  describe('retrieve posts', function () {
    it('should return all posts as array', function (done) {
      group.getPosts().then(function (associatedPosts) {
        expect(associatedPosts).toBeTruthy();
        done();
      });
    });
  });

  describe('add member', function () {
    it('null value', function (done) {
      group.addMember(userModels[0]).then(function (addedMember) {
        expect(addedMember).toBeTruthy();
        done();
      });
    });

    it('generic object value', function (done) {
      group.addMember(null).then(function (addedMember) {
        expect(addedMember).toBeFalsy();
        done();
      });
    });

    it('user model object', function (done) {
      group.addMember(userModels[0]).then(function (addedMember) {
        expect(addedMember).toBeTruthy();
        done();
      });
    });

    it('array of user models', function (done) {
      group.addMembers(userModels).then(function (addedMembers) {
        expect(addedMembers).toBeTruthy();
        done();
      });
    });
  });

  describe('retrieve member', function () {
    it('should return all the members of the group', function (done) {
      group.getMembers().then(function (associatedMembers) {
        expect(associatedMembers).toBeTruthy();
        done();
      });
    });
  });
});