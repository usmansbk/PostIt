/** @module Route - Handles all the route*/
const Route = (function (...imports) {
  const module = {};

  /**
   * @callback signInHandler
   * @param {Object} res - The response object
   * @param {Object} body - The body object
   * @param {Object} err - The error object
   */
  let signInHandler = function signInHandler(statusCode, body) {
    if (statusCode === 200) {
      location = '/dashboard';
    }
  };

  /**
   * @callback signInHandler
   * @param {Object} res - The response object
   * @param {Object} body - The body object
   * @param {Object} err - The error object
   */
  let signUpHandler = function signUpHandler(statusCode, body) {
    if (statusCode === 201) {
      location = '/dashboard';
    }
  };

  /**
   * @callback signInHandler
   * @param {Object} res - The response object
   * @param {Object} body - The body object
   * @param {Object} err - The error object
   */
  let newGroupHandler = function newGroupHandler(statusCode, body) {
    console.log(statusCode, body);
  };

  /**
   * @callback signInHandler
   * @param {Object} res - The response object
   * @param {Object} body - The body object
   * @param {Object} err - The error object
   */
  let newPostHanlder = function newPostHanlder(statusCode, body) {
    console.log(statusCode, body);
  };
  module.signInHandler = signInHandler;
  module.signUpHandler = signUpHandler;
  module.newPostHanlder = newPostHanlder;
  module.newGroupHandler = newGroupHandler;

  return module;
})();
