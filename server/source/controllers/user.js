import jwt from 'jsonwebtoken';
import { User, Group, Post, Sequelize } from '../../db/models';

const { Op } = Sequelize;

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
      jwt.sign({ user }, 'secret', (err, token) => {
        res.status(200).json({
          token,
          status: 'success',
          data: {
            message: 'Logged in',
          }
        });
      })
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
    const { userId } = req;
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
    const { userId } = req;
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
    const { userId } = req;
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
    const { userId } = req;
    let associateGroup;

    Group.findById(guid).then((group) => {
      associateGroup = group;
      if (group.CreatorId === userId) throw Error('Owner cant create zombie group');
      return User.findById(userId);
    }).then(user => associateGroup.removeMember(user)).then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Left group'
      });
    })
      .catch((error) => {
        res.status(400).json({
          status: 'fail',
          data: {
            message: 'Failed to leave group'
          }
        });
      });
  }
  
  /**
   * @param  {Object} req
   * @param  {Object} res
   * @return {null} -the response object
   */
  static findUser(req, res) {
    const { username } = req.query;
    User.findAll({
      attributes: ['username', 'id', 'email', 'createdAt'],
      where: {
        username: {
          [Op.iLike]: `%${username}%`,
        }
      }
    }).then((users) => {
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Result found',
          users
        }
      })
    }).catch((error) => {
      console.log(error);
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Search failed'
        }
      })
    })
  }
}
