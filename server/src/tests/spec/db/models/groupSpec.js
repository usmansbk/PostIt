import db from '../../../../../db/models';
import { seed } from '../../helpers';

const { users, posts } = seed;

const {
  Group, User, Post, sequelize
} = db;

let group, userModels, postModels;

describe('Group database model', () => {
  beforeAll((done) => {
    Group.create({ name: 'valid' }).then((newGroup) => {
      Post.bulkCreate(posts).then(() => Post.findAll())
        .then((foundPosts) => {
          postModels = foundPosts;
          User.bulkCreate(users).then(() => User.findAll())
            .then((foundUsers) => {
              userModels = foundUsers;
              done();
            });
        });
      group = newGroup;
    });
  });

  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => done());
  });

  describe('Create group with', () => {
    afterEach((done) => {
      Group.sync({ force: true }).then(() => done());
    });

    it('null name value', (done) => {
      Group.create({ name: null }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string name value', (done) => {
      Group.create({ name: '' }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank string name value', (done) => {
      Group.create({ name: '  ' }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('name longer than 22 characters', (done) => {
      Group.create({
        name: 'Vaaaaaaaaaaaaaaaalid Name',
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('purpose longer than 50 characters', (done) => {
      Group.create({
        name: 'Valid Name',
        purpose: '0123456789-0123456789-0123456789-0123456789-0123456789-'
      }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('null purpose value', (done) => {
      Group.create({ name: 'Valid Name', purpose: null }).then((newGroup) => {
        expect(newGroup).toBeTruthy();
        done();
      });
    });

    it('blank purpose value', (done) => {
      Group.create({ name: 'Valid Name', purpose: '  ' }).then((newGroup) => {
        expect(newGroup).toBeTruthy();
        done();
      });
    });
  });

  describe('add post with', () => {
    it('null value', (done) => {
      group.addPost(null).then((post) => {
        expect(post).toBeFalsy();
        done();
      });
    });

    it('generic object value', (done) => {
      group.addPost({}).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('post model object', (done) => {
      group.addPost(postModels[0]).then((post) => {
        expect(post).toBeTruthy();
        done();
      });
    });

    it('array of post models', (done) => {
      group.setPosts(postModels).then((associatedPosts) => {
        expect(associatedPosts).toBeTruthy();
        done();
      });
    });
  });

  describe('retrieve posts', () => {
    it('should return all posts as array', (done) => {
      group.getPosts().then((associatedPosts) => {
        expect(associatedPosts).toBeTruthy();
        done();
      });
    });
  });

  describe('add member', () => {
    it('null value', (done) => {
      group.addMember(userModels[0]).then((addedMember) => {
        expect(addedMember).toBeTruthy();
        done();
      });
    });

    it('generic object value', (done) => {
      group.addMember(null).then((addedMember) => {
        expect(addedMember).toBeFalsy();
        done();
      });
    });

    it('user model object', (done) => {
      group.addMember(userModels[0]).then((addedMember) => {
        expect(addedMember).toBeTruthy();
        done();
      });
    });

    it('array of user models', (done) => {
      group.addMembers(userModels).then((addedMembers) => {
        expect(addedMembers).toBeTruthy();
        done();
      });
    });
  });

  describe('retrieve member', () => {
    it('should return all the members of the group', (done) => {
      group.getMembers().then((associatedMembers) => {
        expect(associatedMembers).toBeTruthy();
        done();
      });
    });
  });
});
