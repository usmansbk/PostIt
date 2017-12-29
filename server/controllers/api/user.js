import { User } from '../../../db/models';

export default class UserController {

  static signin(req, res) {
    const body = req.body;
    User.findOne({ where: body }).then(user => {
      if (user) {
        res.status(200).json({
          status: 'success',
          message: 'Sign-In successful',
          data: user
        });
      } else {
        res.status(400).json({
          status: 'fail',
          message: 'Invalid username or password',
          data: user
        });
      }
    }).catch(error => {
      res.status(500).json({
        status: 'error',
        message: 'Database error',
        data: error
      });
    });
  }

  static signup(req, res) {
    User.create(req.body).then(user => {
      res.status(201).json({
        status: 'success',
        message: 'Created new user',
        data: user
      });
    }).catch(error => {
      res.status(400).json({
        status: 'fail',
        message: 'Created new user',
        data: error
      });
    });
  }
}
