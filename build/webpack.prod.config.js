const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const webpackConfig = (
  webpackMerge(baseWebpackConfig, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'production',
      }),
    ]
  })
);
module.exports = webpackConfig;