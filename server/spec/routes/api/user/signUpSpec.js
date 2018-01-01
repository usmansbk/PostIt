const request = require('request'),
  url = 'http://localhost:8888/api/user/signup';

describe('POST:/api/user/signup', () => {

  describe('API route for users to create accounts.', () => {

    describe('Submission of form with', () => {
      describe('invalid username with', () => {
        describe('null field', () => {
        });

        describe('blank space string', () => {
        });

        describe('non alphanumeric character excluding underscore', () => {
        });
      });

      describe('invalid password with', () => {
        describe('null field', () => {
        });

        describe('blank space string', () => {
        });

        describe('length greater than 32 characters', () => {
        });

        describe('length less than 8 characters', () => {
        });
      });

      describe('invalid email with', () => {
        describe('null field', () => {
        });

        describe('blank space string', () => {
        });

        describe('non email format', () => {
        });

        describe('non alphanumeric character excluding @ . _', () => {
        });
      });

      describe('unavailable username', () => {
      });

      describe('available username and password', () => {
      });

    });

  });

}); 
