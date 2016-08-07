'use strict';

var webpack = require('webpack');
var path = require('path');

var options = {

  entry: './src/app',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: __dirname + '/build'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss?$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname,
        exclude: /node_modules\/[^font]/
      }, {
      test: /\.png|\.svg$/,
      loaders: ['file-loader']
      }
    ]
  }
};

module.exports = options;
