var gulp = require('gulp'),
    browserify = require('browserify')

;


var src = './src/game.js',
    dist = './dist';


function browserifyScripts(){

    return browserify(src)
      .pipe(gulp.dest(dist));

}



gulp.task('build', browserifyScripts);