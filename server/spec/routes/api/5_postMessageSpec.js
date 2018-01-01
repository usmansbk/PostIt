const request = require('request'),
  baseUrl = 'http://localhost:8888/api/group/',
  endPoint = '/message';

describe('POST:/api/group/<group id>/message', () => {
  describe('API route that allows a logged in user post messages to created groups', () => {
    describe('Unauthenticated access to route', () => {

    });

    describe('Authenticated submission of form with', () => {
      describe('null message field', () => {
      });

      describe('empty string message', () => {
      });

      describe('with message to a group user in not a member of', () => {
      });
    });
  });
});
