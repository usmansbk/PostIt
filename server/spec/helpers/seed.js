const users = [
  {
    username: 'naruto',
    password: '12345678',
    email: 'shinobi@naruto.com'
  },
  {
    username: 'keneki',
    password: '12345678',
    email: 'keneki@tokyoghoul.com'
  }
];

const posts = [
  {
    message: 'Hello World!',
  },
  {
    message: 'Bye World!',
  }
];

const groups = [
  {
    name: 'Hidden Leaf',
    purpose: 'Shinobis'
  },
  {
    name: 'Coffee Shop',
    purpose: 'NO MEAT'
  }
];

const unregisteredUsernames = ['gordon', 'dflash', 'batman'];

exports.users = users;
exports.groups = groups;
exports.posts = posts;
exports.unregisteredUsernames = unregisteredUsernames;
