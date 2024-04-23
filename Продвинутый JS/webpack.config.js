'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './Продвинутый JS/33/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/Продвинутый JS/33'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
