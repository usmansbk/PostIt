const users = [
  {
    username: 'naruto',
    password: '12345678',
    email: 'shinobi@naruto.com',
    firstname: 'uzumaki',
    surname: 'naruto',
    gender: 'male'
  },
  {
    username: 'keneki',
    password: '12345678',
    email: 'keneki@tokyoghoul.com',
    firstname: 'keneki',
    surname: 'ken',
    gender: 'male'
  },
  {
    username: 'rukia',
    password: '12345678',
    email: 'rukia@bleach.com',
    firstname: 'rukia',
    surname: 'byakuyaku',
    gender: 'female'
  }
];

const posts = [
  {
    message: 'Rasengan!',
  },
  {
    message: 'I\'m the one eyed king!',
  },
  {
    message: 'Cats everywhere!'
  }
];

const groups = [
  {
    name: 'Hidden Leaf',
    purpose: 'Ninja ways!'
  },
  {
    name: 'Coffee Shop',
    purpose: 'No meat!'
  },
  {
    name: 'Soul Society',
    purpose: 'Guide Souls'
  }
];

const unregisteredUsernames = ['gordon', 'dflash', 'batman', 'shazam'];

exports.users = users;
exports.groups = groups;
exports.posts = posts;
exports.unregisteredUsernames = unregisteredUsernames;
