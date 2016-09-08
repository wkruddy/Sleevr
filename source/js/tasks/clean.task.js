var gulp = require('gulp'),
    clean = require('gulp-clean'),
    gulpConstants = require('../constants/gulp.constants');

function cleanUpTask() {

    /*
    ########################
    #### Clean Up Tasks ####
    ########################
    */

    gulp.task('lib:compile', ['lib:combine:sass', 'lib:combine:js']);

    gulp.task('scripts:clean', function(){
      return gulp.src(gulpConstants.paths.buildJs + '/*.js')
            .pipe(clean());
    });

    gulp.task('sassy:clean', function(){
      return gulp.src(gulpConstants.paths.buildCss + '/*.css')
            .pipe(clean());
    });
}

module.exports = cleanUpTask();
