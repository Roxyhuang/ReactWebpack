const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const ip = require('ip');
const CURRENT_IP = `"${ip.address()}"`;
const webpackConfig = [];
  webpackConfig.push(
    webpackMerge(baseWebpackConfig, {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"local"',
            CURRENT_IP: CURRENT_IP,
          }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
      ]
    })
  );
module.exports = webpackConfig;