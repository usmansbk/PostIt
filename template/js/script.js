(function () {
  const loginLink = document.querySelector('#login-link');
  const signupLink = document.querySelector('#signup-link');
  const signupForm = document.querySelector('#signup-form');
  const loginForm = document.querySelector('#login-form');

  signupForm.style.display = 'none';

  signupLink.addEventListener('click', (event) => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    event.preventDefault();    
  });

  loginLink.addEventListener('click', (event) => {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    event.preventDefault();    
  });
})();
