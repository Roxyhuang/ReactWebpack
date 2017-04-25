const config = require('../config.js');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.config');
const http = require('http');
const app = express();
const compiler = webpack(webpackConfig);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  // dev server publicPath
  publicPath: '/',
  stats: {
    colors: true,
    chunks: false,
  },
});
app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  reload: true,
  path: '/__webpack_hmr',
  heartbeat: 1,
}));
// 前面一个是dev-server的路径，后一个是项目真实路径
app.use('/assets', express.static('assets'));
if (require.main === module) {
  const server = http.createServer(app);
  server.listen(8080,  () => {
    console.log('Listening on %j', server.address());
});
}