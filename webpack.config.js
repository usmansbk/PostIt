const path = require('path');

module.exports = {
  entry: './client/js/source/app.js', 
  output: {
    path: path.resolve(__dirname, 'client/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader!sass-loader',
      }
    ]
  } 
};
