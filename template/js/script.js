const Script = (function (Util, Route) {
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
    const target = event.target;
    const dataset = target.dataset;
    const method = dataset.method;
    const action = dataset.action;
    let form = dataset.form;

    let formElem = document.querySelector('[id='+ form +']');
    let valid = formElem.checkValidity();
    let signHandler;
    if (valid) {
      if (form === 'signin') {
        form = Util.parseFormNodes(signInNodes);
        signHandler = Route.signInHandler;
      } else if (form === 'signup') {
        form = Util.parseFormNodes(signUpNodes);
        signHandler = Route.signUpHandler;
      }
      Util.request(method, action, form, signHandler);
      event.preventDefault();
    }
    
  };
  signInBtn.addEventListener('click',submitHandler);
  signUpBtn.addEventListener('click', submitHandler);

  module.submitHandler = submitHandler;

  return module;
})(Util, Route);
