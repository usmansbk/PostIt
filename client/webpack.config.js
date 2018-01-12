const path = require('path');

module.exports = {
  entry: './client/js/source/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/js')
  }
};
