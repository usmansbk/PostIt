const request = {
    session: {},
    body: {},
  },

  response = {
    status: function status(code) {
      this.statusCode = code;
      return this;
    },

    json: function json(obj) {
      return this;
    }
  };

module.exports = { request, response };
