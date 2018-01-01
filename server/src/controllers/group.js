import { Group, User, Post, Sequelize, sequelize } from '../../db/models';
import { Util, Route } from '../helpers';

const { Op } = Sequelize;

export default class GroupController {
  static postMessage(req, res) {
    const { message } = req.body,
      { guid } = req.params,
      { userId } = req.session;

    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { id: userId },
      }]
    }).then((group) => {
      if (!group) throw new Error('401');
      return User.findById(userId).then(user =>
        sequelize.transaction(t =>
          Post.create({ message }, { transaction: t }).then(post =>
            post.setAuthor(user, { transaction: t }).then(() =>
              group.addPost(post, { transaction: t }).then(() => post)))));
    }).then(result =>
      Route.response({
        res,
        statusCode: 201,
        message: 'Posted message successfully',
        data: result
      })).catch(error =>
      Route.response({
        res,
        statusCode: 400,
        message: 'Failed to post message',
        data: error
      }));
  }

  static retrieveMessages(req, res) {
    const { guid } = req.params,
      { userId } = req.session;

    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { id: userId },
      }]
    }).then((group) => {
      if (!group) throw new Error('401');
      return group.getPosts();
    }).then(posts =>
      Route.response({
        res,
        statusCode: 200,
        message: 'Retrieved messages successfully',
        data: posts
      })).catch(error =>
      Route.response({
        res,
        statusCode: 400,
        message: 'Failed to retrieve messages',
        data: error
      }));
  }

  static addUsers(req, res) {
    const { guid } = req.params,
      { invites } = req.body,
      { userId } = req.session,
      usersQueryList = Util.makeColumnList(invites, 'username');

    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Creator',
        where: { id: userId },
      }]
    }).then((group) => {
      if (!group) throw new Error('401');
      return User.findAll({
        where: {
          [Op.or]: usersQueryList
        }
      }).then(users => group.addMembers(users));
    }).then(result =>
      Route.response({
        res,
        statusCode: 200,
        message: 'Users added successfully',
        data: result
      })).catch(error =>
      Route.response({
        res,
        message: 'Failed to add add users to group',
        statusCode: 400,
        data: error
      }));
  }

  static createGroup(req, res) {
    const { userId } = req.session;
    User.findById(userId).then(user =>
      sequelize.transaction((t) => {
        if (!user) throw new Error('401');
        return Group.create(req.body, { transaction: t }).then(group =>
          group.setCreator(user, { transaction: t }).then(creatorGroup =>
            group.addMember(user, { transaction: t }).then(() => creatorGroup)));
      })).then(result =>
      Route.response({
        res,
        statusCode: 201,
        message: 'Created new group',
        data: result
      })).catch(error =>
      Route.response({
        res,
        statusCode: 400,
        message: 'Failed to create new group',
        data: error
      }));
  }
}
