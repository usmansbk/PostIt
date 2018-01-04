/** @module Route - Handles all the route*/
const Route = (function () {
  const module = {};

  /**
   * @callback signInHandler
   * @param {Object} res - The response object
   * @param {Object} body - The body object
   * @param {Object} err - The error object
   */
  let signInHandler = function signInHandler(statusCode, body) {
    console.log(statusCode, body);
  };

  /**
   * @callback signInHandler
   * @param {Object} res - The response object
   * @param {Object} body - The body object
   * @param {Object} err - The error object
   */
  let signUpHandler = function signUpHandler(statusCode, body) {
    console.log(statusCode, body);
  };

  module.signInHandler = signInHandler;
  module.signUpHandler = signUpHandler;
  return module;
})();
