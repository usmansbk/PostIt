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
    res.send('createGroup');
  }
}
