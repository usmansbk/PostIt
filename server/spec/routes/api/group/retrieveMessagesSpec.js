const request = require('request'),
  baseUrl = 'http://localhost:8888/api/group/',
  endPoint = '/messages';

describe('GET:/api/group/<group id>/messages', () => {
  describe('API route that allows a logged in user retrieve messages that have been posted to groups he/she belongs to.', () => {
    describe('Unauthenticated user trying to retrieve messages', () => {
    });

    describe('Authenticated user trying to retrieve messages from', () => {
      describe('group user belong to', () => {
      });

      describe("group user doesn't belong to", () => {
      });
    });
  });
});
