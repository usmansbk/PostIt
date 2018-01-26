import { User, Group, Post } from '../../db/models';

export default class UserController {
  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
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
          message: 'Logged in',
          user
        }
      });
    }).catch(() => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Invalid username or password'
        }
      });
    });
  }

  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
   */
  static signUp(req, res) {
    User.create(req.body).then(user => {
      const username = user.get('username')
          , email = user.get('email')
          , id = user.id;
      const ret = {
        username, email, id
      }
      res.status(201).json({
        status: 'success',
        data: {
          message: 'Account created',
          user: ret,
        }
      })
    }).catch(() => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to create account'
        }
      });
    });
  }

  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
   */
  static retrieveGroups(req, res) {
    const { userId } = req.session;
    User.findById(userId).then(user => user.getGroups()).then((groups) => {

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
      console.log(error);
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to retrieve groups'
        }
      });
    });
  }

  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
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
    }).catch(() => {
      res.status(404).json({
        status: 'fail',
        data: {
          message: 'Failed to retrieve posts'
        }
      });
    });
  }
  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
   */
  static deletePost(req, res) {
    const { pid } = req.params;
    Post.findById(pid).then(post => post.destroy()).then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Post deleted'
      });
    }).catch(() => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to delete post'
        }
      });
    });
  }
  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
   */
  static leaveGroup(req, res) {
    const { guid } = req.params;
    const { userId } = req.session;
    let associateGroup;

    Group.findById(guid).then((group) => {
      const creator = group.getCreator();
      associateGroup = group;
      if (creator.id === userId) throw Error();
      return User.findById(userId);
    }).then(user => associateGroup.removeMember(user)).then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Left group'
      });
    })
      .catch(() => {
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'Failed to leave group'
          }
        });
      });
  }
}
