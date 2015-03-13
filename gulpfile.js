  var gulp = require('gulp'),
    help = require('gulp-task-listing');


  require('./gulp/deploy');
  require('./gulp/build');


  gulp.task('help', help);
  gulp.task('default', [help]);