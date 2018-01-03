const db = require('../../../db/models');

const {
  Group, User, Post, sequelize
} = db;

let group, users, posts;

describe('Group database model', () => {
  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => done());
  });

  describe('Create group with', () => {
    afterEach((done) => {
      Group.sync({ force: true }).then(() => done());
    });

    it('null name value', (done) => {
      done();
    });

    it('empty string name value', (done) => {
      done();
    });

    it('blank string name value', (done) => {
      done();
    });

    it('name longer than 22 characters', (done) => {
      done();
    });

    it('purpose longer than 50 characters', (done) => {
      done();
    });

    it('null purpose value', (done) => {
      done();
    });

    it('blank purpose value', (done) => {
      done();
    });
  });

  describe('add post with', () => {
    it('null value', (done) => {
      done();
    });

    it('generic object value', (done) => {
      done();
    });

    it('post model object', (done) => {
      done();
    });

    it('array of post models', (done) => {
      done();
    });
  });

  describe('retrieve posts', () => {
    it('should return all posts as array', (done) => {
      done();
    });
  });

  describe('add member', () => {
    it('null value', (done) => {
      done();
    });

    it('generic object value', (done) => {
      done();
    });

    it('user model object', (done) => {
      done();
    });

    it('array of user models', (done) => {
      done();
    });
  });

  describe('retrieve member', () => {
    it('should return all the members of the group', (done) => {
      done();
    });
  });
});
