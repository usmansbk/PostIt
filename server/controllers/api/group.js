export default class Group {
  static postMessage(req, res) {
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
