export default class Route {
  static response(obj) {
    let { res, statusCode, errorMessage, message, data } = obj,
      status;
    
    if (+data.message === 401) {
      statusCode = 401;
      message = errorMessage;
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
