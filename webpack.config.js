const baseConfig = require('./internals/webpack/webpack.base.config.js');

const isDevelopment = process.env.NODE_ENV !== 'production';
const config = isDevelopment
  ? require('./internals/webpack/webpack.dev.config')(baseConfig)
  : require('./internals/webpack/webpack.prod.config')(baseConfig);

module.exports = config;
