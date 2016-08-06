'use strict';

var webpack = require('webpack');

var options = {
  // Should speed up build
  devtool: 'inline-eval-cheap-source-map',

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
        exclude: /node_modules/,
        include: __dirname
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