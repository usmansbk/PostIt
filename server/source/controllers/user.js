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
    User.create(req.body).then((user) => {
      req.session.userId = user.id;
      res.status(201).json({
        status: 'success',
        data: {
          message: 'Account created',
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
  static fetchAll(req, res) {
    const { userId } = req.session;
    User.findOne({
      where: { id: userId },
      attributes: ['username', 'email', 'createdAt', 'id'],
      include: [{
        model: Group,
        as: 'Groups',
        through: {
          where: { UserId: userId },
        },
        include: [
          {
            model: User,
            as: 'Creator',
            attributes: ['username', 'email', 'createdAt', 'id']
          },
          {
              model: User,
              as: 'Members',
              attributes: ['username', 'email', 'createdAt', 'id']
          },
          {
            model: Post,
            as: 'Posts',
            include: [{
              model: User,
              as: 'author',
              attributes: ['username', 'email', 'id', 'createdAt']
            }]
          }
        ]
      }]
    }).then((user) => {
      if (!user) throw new Error("Unable to fetch user data");
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Fetch all data',
          user
        }
      })
    })
    .catch((error) => {
      console.log(error);
      res.status(401).json({
        status: 'fail',
        data: {
          message: 'Failed to fetch all data'
        }
      })
    })
  }

  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
   */
  static retrieveGroups(req, res) {
    const { userId } = req.session;
    User.findById(userId).then(user => user.getGroups({
      include: [{
        model: User,
        as: 'Creator',
        attributes: ['username', 'email', 'id', 'createdAt']
      }, {
        model: User,
        as: 'Members',
        attributes: ['username', 'email', 'id', 'createdAt']
      }]
    })).then((groups) => {

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
