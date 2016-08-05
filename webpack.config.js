'use strict';

var webpack = require('webpack');

let options = {
  //context: __dirname + '/src',
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
      }
    ]
  }
};

module.exports = options;