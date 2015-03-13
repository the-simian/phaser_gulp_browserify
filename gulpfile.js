  var gulp = require('gulp'),
    tasklisting = require('gulp-task-listing');


  require('./gulp/deploy');
  require('./gulp/build');


  gulp.task('help', tasklisting);
  gulp.task('default', ['help']);