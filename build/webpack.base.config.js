const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    index: path.resolve('src/app.tsx'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    // path: path.resolve('/dist'),
    publicPath: '/'
  },
  devtool:'source-map',
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' }
    ],
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
    // resolve: {
    //   extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    //   modulesDirectories: [
    //     'node_modules'
    //   ]
    // },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:  path.resolve('./dist/index.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // chunks: [name],
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
};

module.exports = config;