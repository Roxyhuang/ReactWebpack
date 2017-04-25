require('shelljs/global');

const path = require('path');
const config = require('../config');
const ora = require('ora');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.config');

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
);

const spinner = ora(`building for prodction`);
spinner.start();
const assetsPath = path.join('dist');
rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'assets/', assetsPath);

webpack((webpackConfig), function (err, stats) {
  console.log(err);
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n');
});