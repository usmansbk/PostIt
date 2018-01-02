const req = {
    session: {},
    body: {},
  },

  res = {
    status: function status(code) {
      this.statusCode = code;
      return this;
    },

    json: function json() {
      return this;
    }
  };

const registerUsers = function registerUsers(users, req, url) {
  users.forEach(user => req.post(url, { form: user }));
};

const getUsernames = function getUsernames(users) {
  let nameString = '';
  users.forEach((user) => {
    nameString += user.username;
  });
  return nameString;
};

module.exports = {
  req, res, registerUsers, getUsernames
};
