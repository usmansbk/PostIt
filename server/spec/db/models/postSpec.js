const db = require('../../../db/models');

const { Post, User, sequelize } = db;

let author, newPost;

describe('Post database model.', () => {
  beforeAll((done) => {
    User.create({
      username: 'saitama',
      email: 'capedbaldy@onepunchman.com',
      password: '12345678',
      gender: 'male'
    }).then((user) => {
      author = user;
      done();
    });
  });

  afterAll((done) => {
    sequelize.sync({ force: true }).then(() => done());
  });

  describe('message property with', () => {
    it('null value', (done) => {
      Post.create({ message: null }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('empty string value', (done) => {
      Post.create({ message: '' }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('blank space string value', (done) => {
      Post.create({ message: '  ' }).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('valid string value', (done) => {
      Post.build({ message: 'How do i kill a mosquito?' })
        .save()
        .then((post) => {
          newPost = post;
          expect(post).toBeTruthy();
          done();
        });
    });
  });

  describe('set author to', () => {
    it('null value', (done) => {
      newPost.setAuthor(null).then((post) => {
        expect(post).toBeTruthy();
        done();
      }); 
    });

    it('generic object', (done) => {
      const obj = {};
      newPost.setAuthor(obj).catch((error) => {
        expect(error.value).toBeFalsy();
        done();
      });
    });

    it('user object', (done) => {
       newPost.setAuthor(author).then((post) => {
        expect(post).toBeTruthy();
        post.getAuthor().then((author) => {
          expect(author).toBeTruthy();
          done();
        });
      });
    });
  });

});
