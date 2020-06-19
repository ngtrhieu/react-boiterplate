const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = config => ({
  ...config,

  mode: 'development',
  output: {
    ...config.output,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      filename: './index.html',
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false, // show a warning when there is a circular dependency
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      SERVER_URI: 'http://localhost:3000',
    }),
  ],

  // Emit a source map for easier debugging
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});
