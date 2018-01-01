export default class Route {

  static isAuthenticated(req, res, next) {
    const { userId } = req.session;
    if (!userId) {

      res.status(403).json({
        status: 'fail',
        message: 'Unauthenticated',
        data: null
      });

      return;

    }

    next();
    
  }

}
