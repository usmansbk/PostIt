export default class Route {

  static auth(req, res, next) {
    console.log('auth request');
    next();
  }

}
