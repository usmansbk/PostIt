const Script = (function (Util) {
  const module = {};

  let signUpBtn
   ,  signInBtn
   ,  signUpNodes
   ,  signInNodes;

  signUpBtn = document.querySelector('#signup-btn');
  signInBtn = document.querySelector('#signin-btn');
  signUpNodes = document.querySelectorAll('[form=signup]');
  signInNodes = document.querySelectorAll('[form=signin]');

  let submitHandler = function submitHandler(event) {
    const method = event.target.dataset.method;
    const action = event.target.dataset.action;
    let form = event.target.dataset.form;
    if (form === 'signin') {
      form = Util.parseFormNodes(signInNodes);
    } else if (form === 'signup') {
      form = Util.parseFormNodes(signUpNodes);
    }
  //  Util.request(method, action, form);
    event.preventDefault();
  };
  signInBtn.addEventListener('click',submitHandler);
  signUpBtn.addEventListener('click', submitHandler);

  module.submitHandler = submitHandler;

  return module;
})(Util);
