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

module.exports = {
  req, res
};
