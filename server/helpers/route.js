export default class Route {
  static response(obj) {
    let { res, statusCode, message, data } = obj,
      status;
    
    if (+data.message === 401) {
      statusCode = 401;
      message = 'User is unauthorized to perform action';
    }

    if (statusCode < 300) {
      status = 'success';
    } else {
      status = 'fail';
    }

    res.status(statusCode).json({
      status,
      message,
      data,
    });
  }
}
