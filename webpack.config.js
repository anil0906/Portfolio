var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch',path.resolve( __dirname+ "/public/scripts/root.js" )],
  output: { path: path.resolve( __dirname + "/public/bin" ), filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  },
};
