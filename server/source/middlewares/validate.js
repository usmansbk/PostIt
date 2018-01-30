const isEmpty = /^\s*$/m,
  MAX_NAME_LEN = 22,
  MAX_PURPOSE_LENGTH = 50;

function test(target) {
  return !target || isEmpty.test(target);
}
export default class Validate {
  static createGroup(req, res, next) {
    const { name, purpose } = req.body;
    if (!name || isEmpty.test(name)) {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'name: name is required'
        }
      });
      return;
    }
    next();
  }

  static addUsers(req, res, next) {
    const { invites } = req.body;
    if (test(invites)) {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'invites: A list of users is required'
        }
      });
      return;
    }
    next();
  }

  static postMessage(req, res, next) {
    const { message } = req.body;
    if (test(message)) {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'message: A message is required'
        }
      });
      return;
    }
    next();
  }
}
