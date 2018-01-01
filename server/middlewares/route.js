export default class Route {

  static isAuthenticated(req, res, next) {
    const { authenticated } = req.session;
    console.log(req.url, req.session);
    if (!authenticated) {

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
