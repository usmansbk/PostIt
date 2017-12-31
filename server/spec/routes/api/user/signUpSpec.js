const request = require('request'),
  url = 'http://localhost:8888/api/user/signup';

describe('POST:/api/user/signup', () => {

  describe('API route for users to create accounts.', () => {

    describe('Submission of form with', () => {

      describe('no email', () => {
      });

      describe('no username', () => {
      });

      describe('no password', () => {
      });

      describe('invalid email', () => {
      });

      describe('password length', () => {

        describe('greater than 32 characters long', () => {
        });

        describe('less than 8 characters long', () => {
        });

      });

      describe('unavailable username', () => {
      });

      describe('unavailable password', () => {
      });

      describe('available username and password', () => {
      });

    });

  });

}); 
