'use strict';

var users = [{
  username: 'naruto',
  password: '12345678',
  email: 'shinobi@naruto.com',
  firstname: 'uzumaki',
  surname: 'naruto',
  gender: 'male'
}, {
  username: 'keneki',
  password: '12345678',
  email: 'keneki@tokyoghoul.com',
  firstname: 'keneki',
  surname: 'ken',
  gender: 'male'
}, {
  username: 'rukia',
  password: '12345678',
  email: 'rukia@bleach.com',
  firstname: 'rukia',
  surname: 'byakuyaku',
  gender: 'female'
}];

var posts = [{
  message: 'Rasengan!'
}, {
  message: 'I\'m the one eyed king!'
}, {
  message: 'Cats everywhere!'
}];

var groups = [{
  name: 'Hidden Leaf',
  purpose: 'Ninja ways!'
}, {
  name: 'Coffee Shop',
  purpose: 'No meat!'
}, {
  name: 'Soul Society',
  purpose: 'Guide Souls'
}];

var unregisteredUsernames = ['gordon', 'dflash', 'batman', 'shazam'];

exports.users = users;
exports.groups = groups;
exports.posts = posts;
exports.unregisteredUsernames = unregisteredUsernames;