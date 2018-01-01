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
      this.status = obj.status;
      this.data = obj.data;
    }
  };

module.exports = { request, response };
