(function (...imports) {
  const Util = imports[0]
    , Route = imports[1];
  let signUpBtn
   ,  signInBtn
   ,  signUpNodes
   ,  signInNodes
   , submit = Util.submit;

  const { signInHandler, signUpHandler } = Route;

  Util.passwordValidator('signup-password', 'confirm-password');


  signUpBtn = document.querySelector('#signup-btn');
  signInBtn = document.querySelector('#signin-btn');
  signUpNodes = document.querySelectorAll('[form=signup]');
  signInNodes = document.querySelectorAll('[form=signin]');

  signInBtn.addEventListener('click', (event) => {
    submit(event, signInNodes, signInHandler);
  });
  signUpBtn.addEventListener('click', (event) => {
    submit(event, signUpNodes, signUpHandler);
  });

})(Util, Route);
