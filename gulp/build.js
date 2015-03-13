var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream')

;


var src = './src/game.js',
    dist = './dist';

function browserifyScripts(){

    return browserify(src)
      .bundle()
      .pipe(source('game.js'))
      .pipe(gulp.dest(dist));

}



gulp.task('build', browserifyScripts);