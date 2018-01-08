import bunyan from 'bunyan';
import { User } from '../../db/models';

const log = bunyan.createLogger({ name: 'postit-user-controller' });
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
    }).catch((error) => {
      log.info('Fail to signin', error);
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Invalid user or password'
        }
      });
    });
  }

  static signUp(req, res) {
    User.create(req.body).then(user =>
      res.status(201).json({
        status: 'success',
        data: {
          user
        }
      })).catch((error) => {
      log.info('Fail to signup', error);
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Fail to create account'
        }
      });
    });
  }
}
