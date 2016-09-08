var gulp = require('gulp'),
    utils = require('gulp-util'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    gulpConstants = require('../constants/gulp.constants');

function buildTask() {
    /*
    ########################
    #### Start Up Tasks ####
    ########################
    */

    gulp.task('build', ['browserify', 'sassy:compression', 'lib:compile'], function(){
      utils.log('################ Gulp Watching for Changes! ################');
    });

    gulp.task('default', ['build', 'browser:sync'], function(){
      utils.log('################ Gulp Default Process Running! ################');
      gulp.watch('*.html', reload);
      //gulp.watch(gulpConstants.paths.sourceJs, ['lib:combine:js', 'scripts:clean', 'browserify']);
      gulp.watch(gulpConstants.paths.sourceSass, ['lib:combine:sass','sassy:clean', 'sassy:compression']);
    });    
}

module.exports = buildTask();
