import { User, Sequelize } from '../../db/models';
import { Route } from '../helpers';

const { Op } = Sequelize;

export default class UserController {

  static signIn(req, res) {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username,
        password
      }
    }).then(user => {
      if (!user) throw new Error('401');
      req.session.userId = user.id;
      console.log(req.session);
      Route.response({
        res,
        statusCode: 200,
        message: 'Sign-In successful',
        data: user
      });
    }).catch(error => {
      Route.response({
        res,
        statusCode: 400,
        errorMessage: 'Invalid username/password',
        data: error
      });
    });
  }

  static signUp(req, res) {
    User.create(req.body).then(user => {
      Route.response({
        res,
        statusCode: 201,
        message: 'Created new user',
        data: user
      });
    }).catch(error => {
      Route.response({
        res,
        statusCode: 400,
        message: 'Failed to create new user',
        data: error
      });
    });
  }
}
