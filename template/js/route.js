const Route = (function () {
  const module = {};

  let signInHandler = function signInHandler(res, body, err) {
    console.log(res);
  };

  let signUpHandler = function signUpHandler(res, body, err) {
    console.log(res);
  };

  module.signInHandler = signInHandler;
  module.signUpHandler = signUpHandler;
  return module;
})();
