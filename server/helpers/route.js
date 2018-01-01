export default class Route {
  static response(obj) {
    const {
      res,
      errorMessage,
      data
    } = obj;
    let {
        statusCode,
        message,
      } = obj,
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
