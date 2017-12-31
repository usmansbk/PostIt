import validator from 'validator';

export default class Validate {
  
  static addUsers(req, res, next) {
    console.log('validate addUsers');
    next();
  }

  static postMessage(req, res, next) {
    console.log('validate postMessage');
    next();
  }

  static retrieveMessages(req, res, next) {
    console.log('validate retrieveMessages');
    next();
  }

  static createGroup(req, res, next) {
    console.log('validate createGroup');
    next();
  }

}
