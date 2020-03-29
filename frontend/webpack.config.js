let path = require('path');
let webpack = require('webpack');
let BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './static/frontend/js/index.js',
  output: {
      path: path.resolve('./static/frontend/webpack_bundles/'),
      filename: "[name]-[hash].js"
  },
  watch: true,
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node-modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-react', '@babel/preset-env'],
      }
    }]
  }
};