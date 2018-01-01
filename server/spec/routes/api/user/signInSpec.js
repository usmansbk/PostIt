const request = require('request'),
  url = 'http://localhost:8888/api/user/signin';

describe('POST:/api/user/signin', () => {
  describe('API route for users to login to the application.', () => {
    describe('Submission of form with', () => {
      describe('invalid password with', () => {
        describe('null field', () => {
        });

        describe('blank space string', () => {
        });
      });

      describe('invalid username with', () => {
        describe('null field', () => {
        });

        describe('blank space string', () => {
        });
      });

      describe('valid unregistered username and password', () => {
      });

      describe('registered username and password', () => {
      });
    });
  });
});
