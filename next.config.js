const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      })
    );
    return config;
  }
};
