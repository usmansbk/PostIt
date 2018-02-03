const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'js/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'),
    publicPath: path.resolve(__dirname, '/js/')
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './'),
    publicPath: path.resolve(__dirname, '/js/'),
    proxy: {
      '/api/*': 'http://localhost:8888',
    },
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
