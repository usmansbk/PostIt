const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'js/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader' ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
