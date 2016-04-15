var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
};
