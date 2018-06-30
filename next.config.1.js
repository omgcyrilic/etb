const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const nextConfig = require('./next.config');

module.exports = {
  webpack: (config, { dev },) => {
    const { cssModules } = nextConfig;
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      }),
      extractCSSPlugin = new ExtractTextPlugin({
        filename: '/static/styles/styles.css',
      }),
    ),
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.css$/,
        use: cssLoaderConfig(extractCSSPlugin, {
          cssModules,
          dev
        })
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
};
