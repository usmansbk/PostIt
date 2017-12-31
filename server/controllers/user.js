import { User, Sequelize } from '../../db/models';
import { Route } from '../helpers';

const Op = Sequelize.Op;

export default class UserController {

  static signin(req, res) {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username,
        password
      }
    }).then(user => {
      if (!user) throw new Error('401');
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

  static signup(req, res) {
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
