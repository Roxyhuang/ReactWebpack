const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    index: path.resolve('src/app.tsx')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('/dist/'),
    publicPath: '/assets/'
  },
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
  },
  devtool:'source-map',
  // resolve: {
  //   modulesDirectories: ['node_modules'],
  //   extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  // },
  module: {
    // preLoaders: [
    //   { test: /\.js$/, loader: 'source-map-loader' }
    // ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        } //将react编译成js文件
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      //打包css文件
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      //编译sass文件
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      //对图片进行打包
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:  '/dist/index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // chunks: [name],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
};

module.exports = config;