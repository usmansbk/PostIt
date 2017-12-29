import { Group } from '../../../db/models';

export default class GroupController {
  static postMessage(req, res) {
   const { message } = req.body;
    res.send('postMessage');
  }

  static retrieveMessages(req, res) {
    res.send('retrieveMessages');
  }

  static addUser(req, res) {
    res.send('addUser');
  }

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
