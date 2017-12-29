import { Group, User, Sequelize } from '../../../db/models';
import { Util } from '../../helpers';

const Op = Sequelize.Op;

export default class GroupController {

  /**
   * POST: /api/group/<group id>/message
   */
  static postMessage(req, res) {
   const { message } = req.body;
    res.send('postMessage');
  }

  /**
   * GET: /api/group/<group id>/messages
   */ 
  static retrieveMessages(req, res) {
    res.send('retrieveMessages');
  }

  /**
   * POST: /api/group/<group id>/user
   */
  static addUser(req, res) {
    const { guid } = req.params,
      { invites } = req.body,
      usersQueryList = Util.makeColumnList(invites, 'username');
    let userModels;
    User.findAll({
      where: {
        [Op.or]: usersQueryList
      }
    }).then(users => {
      userModels = users;
    }).catch(error => {
    });

    Group.findById(guid).then(group => {
      res.send(userModels);
    }).catch(error => {
    });
  }

  /**
   * POST: /api/group
   */
  static createGroup(req, res) {
    Group.create(req.body).then(group => {
      res.status(201).json({
        status: 'success',
        message: 'Created new group',
        data: group
      });
    }).catch(error => {
      res.status(400).json({
        status: 'fail',
        message: 'Failed to create group',
        data: error 
      });
    });
  }
}
