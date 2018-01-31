const isEmpty = (str) => str.trim().length === 0;

function isInvalid(target) {
  return !target || isEmpty(target);
}

export default class Validate {
  static createGroup(req, res, next) {
    const { name, purpose } = req.body;
    if (!name || isEmpty(name)) {
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
    if (isInvalid(invites)) {
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
    if (isInvalid(message)) {
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
