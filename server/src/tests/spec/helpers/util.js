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

export { req, res, registerUsers };
