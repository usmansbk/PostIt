import { User } from '../../../db/models';

export default class UserController {

  static signin(req, res) {
    const { username, password } = req.body;
    res.send('class works!');
  }

  static signup(req, res) {
    User.create(req.body).then(user => {
      res.status(201);
    });
  }
}
