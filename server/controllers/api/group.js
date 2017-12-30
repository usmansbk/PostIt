import { Group, User, Post, Sequelize, sequelize } from '../../../db/models';
import { Util } from '../../helpers';

const Op = Sequelize.Op;

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
      if (!group) throw new Error();
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
      res.status(201).json({
        status: 'success',
        message: 'Posted message successfully',
        data: result
      });
    }).catch(error => {
      res.status(400).json({
        status: 'fail',
        message: 'Failed to post message',
        data: error
      });
    });
  }

  /**
   * GET: /api/group/<group id>/messages
   */ 
  static retrieveMessages(req, res) {
    const { guid } = req.params;
    Group.findById(guid).then(group => {
      return group.getPosts();
    }).then(posts => {
      res.status(200).json({
        status: 'success',
        message: 'Retrieved messages successfully',
        data: posts 
      });
    }).catch(error => {
      res.status(400).json({
        status: 'fail',
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
      return User.findAll({
        where: {
          [Op.or]: usersQueryList
        }
      }).then(users => {
        return group.addMembers(users)
      });
    }).then(result => {
      res.status(200).json({
        status: 'success',
        message: 'Users added successfully',
        data: result
      });
    }).catch(error => {
      res.status(400).json({
        status: 'fail',
        message: 'Failed to add users',
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
        if (!user) throw new Error();
        return Group.create(req.body, { transaction: t }).then(group => {
          return group.setCreator(user, { transaction: t }).then(group => {
            return group.addMember(user, { transaction: t }).then( () => {
              return group;
            });
          });
        });
      }).then(result => {
        res.status(201).json({
          status: 'success',
          message: 'Created new group',
          data: result
        }); 
      }).catch(error => {
        res.status(400).json({
          status: 'fail',
          message: 'Failed to create group',
          data: error
        });
      });
    });
  }
}
