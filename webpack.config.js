var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');

var appContext = path.join(__dirname, '/');

module.exports = {
  context: appContext,
  entry: [
    './scale'
  ],
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'bundle.js',
    publicPath: "http://localhost:3001"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
      include: path.join(__dirname, '.')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
  	}]
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
};