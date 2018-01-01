import { Group, User, Post, Sequelize, sequelize } from '../../db/models';
import { Util, Route } from '../helpers';

const { Op } = Sequelize;

export default class GroupController {

  /**
   * POST: /api/group/<group id>/message
   */
  static postMessage(req, res) {
    const { message, username } = req.body,
          { guid } = req.params;

    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { username },
      }]
    }).then(group => {
      if (!group) throw new Error('401');
      return User.findOne({ where: { username } }).then(user => {
        return sequelize.transaction(function (t) {
          return Post.create({ message }, { transaction: t }).then( post => { 
            return post.setAuthor(user, { transaction: t }).then( () => {
              return group.addPost(post, { transaction: t }).then( (addedPost) => {
                return post;
              });
            });
          });
        });
      });
    }).then(result => {
      Route.response({
        res,
        statusCode: 201,
        message: 'Posted message successfully',
        data: result
      });
    }).catch(error => {
      Route.response({
         res,
         statusCode: 400,
         message: 'Failed to post message',
         data: error
      });
    });
  }

  /**
   * GET: /api/group/<group id>/messages
   */ 
  static retrieveMessages(req, res) {
    const { guid } = req.params,
      { username } = req.body;

    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { username },
      }]
    }).then(group => {
      if (!group) throw new Error('401');
      return group.getPosts();
    }).then(posts => {
      Route.response({
        res,
        statusCode: 200,
        message: 'Retrieved messages successfully',
        data: posts 
      });
    }).catch(error => {
      Route.response({
         res,
         statusCode: 400,
         message: 'Failed to retrieve messages',
         data: error
      });
    });
  }

  /**
   * POST: /api/group/<group id>/user
   */
  static addUsers(req, res) {
    const { guid } = req.params,
      { invites, sender} = req.body,
      usersQueryList = Util.makeColumnList(invites, 'username');

    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Creator',
        where: { username: sender },
      }]
    }).then(group => {
      if (!group) throw new Error('401');
      return User.findAll({
        where: {
          [Op.or]: usersQueryList
        }
      }).then(users => {
        return group.addMembers(users)
      });
    }).then(result => {
      Route.response({
        res,
        statusCode: 200,
        message: 'Users added successfully',
        data: result
      });
    }).catch(error => {
      Route.response({
        res,
        statusCode: 400,
        message: 'Failed to add add users to group',
        data: error
      });
    });
  }

  /**
   * POST: /api/group
   */
  static createGroup(req, res) {
    const { username } = req.body;
    User.findOne({ where: { username } }).then(user => {
      sequelize.transaction(function (t) {
        if (!user) throw new Error('401');
        return Group.create(req.body, { transaction: t }).then(group => {
          return group.setCreator(user, { transaction: t }).then(group => {
            return group.addMember(user, { transaction: t }).then( () => {
              return group;
            });
          });
        });
      }).then(result => {
        Route.response({
          res,
          statusCode: 201,
          message: 'Created new group',
          data: result
        }); 
      }).catch(error => {
        Route.response({
         res,
         statusCode: 400,
         message: 'Failed to create new group',
         data: error
        });
      });
    });
  }
}
