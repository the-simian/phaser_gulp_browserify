'use strict'

var gulp = require('gulp'),
  webpack = require('gulp-webpack-build');

var src = 'webpack.config.js',
  dist = './dist';

var formatOpts = {
  version: false,
  timings: true
};

var failOpts = {
  errors: true,
  warnings: false
};

var webpackOptions = {
    debug: true,
    devtool: '#source-map',
    watchDelay: 200
  },
  webpackConfig = {
    useMemoryFs: true,
    progress: true
  };

function assembleScripts() {

  return gulp
    .src(src)
    .pipe(webpack.configure(webpackConfig))
    .pipe(webpack.overrides(webpackOptions))
    .pipe(webpack.compile())
    .pipe(webpack.format(formatOpts))
    .pipe(webpack.failAfter(failOpts))
    .pipe(gulp.dest(dist));
}


gulp.task('build-scripts', assembleScripts);