import { User } from '../../db/models';

export default class UserController {
  static signIn(req, res) {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username,
        password
      }
    }).then((user) => {
      if (!user) throw new Error();
      req.session.userId = user.id;
      res.status(200).json({
        status: 'success',
        data: {
          user
        }
      });
    }).catch(() =>
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Invalid user / password'
        }
      }));
  }

  static signUp(req, res) {
    User.create(req.body).then(user =>
      res.status(201).json({
        status: 'success',
        data: {
          user
        }
      })).catch(error =>
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to create new user',
          error
        }
      }));
  }
}
