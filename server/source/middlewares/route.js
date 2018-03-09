import jwt from 'jsonwebtoken';

export default class Route {
  static isAuthenticated(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      jwt.verify(bearerToken, 'secret', (err, authData) => {
        if (err) {
          res.status(403).json({
            status: 'fail',
            message: 'Unauthenticated',
          });
        } else {
          const { user } = authData;
          req.userId = user.id
        }
      })
    }
    next();
  }
}
