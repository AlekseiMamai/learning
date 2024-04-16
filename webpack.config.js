'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './Продвинутый JS/24/Food/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/Продвинутый JS/24/Food/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
