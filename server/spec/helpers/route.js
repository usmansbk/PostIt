const request = {
  session: {},
  body: {},
},

response = {
  status: function status(code) {
    this.statusCode = code;
    return this;
  },

  json: function (obj) {
  }
};

module.exports = { request, response };
