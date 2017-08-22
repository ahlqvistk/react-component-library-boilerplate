/* global __dirname */
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'lib'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx?/i,
        use: 'eslint-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?/i,
        use: 'babel-loader',
      },
    ],
  },
};
