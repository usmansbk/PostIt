(function () {
  let signUpBtn
   ,  signInBtn
   ,  signUpNodes
   ,  signInNodes;

  const passwordValidator = function passwordValidator(password1Id, password2Id) {
    let password = document.querySelector(`#${password1Id}`),
      confirm_password = document.querySelector(`#${password2Id}`);
    let validatePassword = function () {
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }
    confirm_password.addEventListener('change', validatePassword);
    password.addEventListener('change', validatePassword);
  };

  };

  passwordValidator('signup-password', 'confirm-password');


  signUpBtn = document.querySelector('#signup-btn');
  signInBtn = document.querySelector('#signin-btn');
  signUpNodes = document.querySelectorAll('[form=signup]');
  signInNodes = document.querySelectorAll('[form=signin]');

  signInBtn.addEventListener('click', (event) => {
  });
  signUpBtn.addEventListener('click', (event) => {
  });

})();
