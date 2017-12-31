export default class Route {

  static auth(req, res, next) {
    return res.send('Auth middleware');
  }

}
