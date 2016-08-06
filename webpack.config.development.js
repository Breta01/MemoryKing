var webpack = require('webpack');
var path = require('path');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {

  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './src/app',
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.png|\.svg$/,
      loaders: ['file-loader']
    }]
  },

  output: {
    path: __dirname + '/build',
    publicPath: 'http://localhost:9000/build/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
