'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './Продвинутый JS/22/Food/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/Продвинутый JS/22/Food/js'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
