import { User, Group, Post, Sequelize } from '../../db/models';

export default class UserController {
  /**
   * @param  req
   * @param  res
   */ 
  static signIn(req, res) {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username,
        password
      },
      attributes: { exclude: ['password'] }
    }).then((user) => {
      if (!user) throw new Error();
      req.session.userId = user.id;
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    }).catch((error) => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Invalid username or password'
        }
      });
    });
  }

  /**
   * @param  req
   * @param  res
   */ 
  static signUp(req, res) {
    User.create(req.body).then(user =>
      res.status(201).json({
        status: 'success',
        data: {
          user
        }
      })).catch((error) => {
			let err = error.errors[0];
			let { message, path } = err;
			message = `${path}: ${message}`;
      res.status(400).json({
        status: 'fail',
        data: {
          message
        }
      });
    });
  }

  /**
   * @param  req
   * @param  res
   */ 
  static retrieveGroups(req, res) {
    const { userId } = req.session;
    User.findById(userId).then((user) => {
      return user.getGroups();
    }).then((groups) => {
      let message = '', statusCode = 200;
      if (groups.length === 0) {
        message = 'You don\'t belong to any group';
        statusCode = 404;
      }
      res.status(statusCode).json({
        status: 'success',
        data: { message, groups }
      });
    }).catch((error) => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to retrieve groups'
        }
      });
    });
  }

  /**
   * @param  req
   * @param  res
   */ 
  static retrievePosts(req, res) {
    const { userId } = req.session;
    Post.findAll({
      where: {
        authorId: userId 
      }
    }).then((posts) => {
      let message = '', statusCode = 200;
      if (posts.length === 0) {
        message = 'You haven\'t made any post';
        statusCode = 404;
      }
      res.status(statusCode).json({
        status: 'success',
        data: { message, posts }
      });
    }).catch((error) => {
      res.status(404).json({
        status: 'fail',
        data: {
          message: 'Failed to retrieve posts'
        }
      });
    });
  }

  static deletePost(req, res) {
    const { pid } = req.params;
    Post.findById(pid).then((post) => {
      return post.destroy();
    }).then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Post deleted'
      });
    }).catch((error) => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to delete post'
        }
      });
    });
  }

  static leaveGroup(req, res) {
    const { guid } = req.params;
    const { userId } = req.session;

    Group.findById(guid).then((group) => {
      let creator = group.getCreator();
      if (creator.id === userId) throw Error();
      return User.findById(userId);
    }).then((user) => {
      return group.removeMember(user);
    }).then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Left group'
      });
    }).catch((error) => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to leave group'
        }
      });
    });
  }
}
