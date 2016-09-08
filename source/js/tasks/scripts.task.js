var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    size = require('gulp-size'),
    gulpConstants = require('../constants/gulp.constants');

function scriptsTask() {

    /*
    ########################
    ### JavaScript Tasks ###
    ########################
    */

    gulp.task('lint', function(){
      return gulp.src(gulpConstants.paths.sourceJs)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    // gulp.task('scripts:compression', ['scripts:clean'],function(){
    //   return gulp.src(gulpConstants.paths.sourceJs)
    //         .pipe(size({
    //           showFiles: true,
    //           title: '######## Initial ----Core---- JS size ########'
    //         }))
    //         //.pipe(babel())
    //         .pipe(concat('scripts'))
    //         .pipe(rename({
    //           extname: '.min.js'
    //         }))
    //         .pipe(uglify())
    //         .pipe(size({
    //           showFiles: true,
    //           title: '######## Final compressed ----Core---- JS size ########'
    //         }))
    //         .pipe(gulp.dest(gulpConstants.paths.buildJs))
    //         .pipe(reload({stream: true}));
    // });

    gulp.task('lib:combine:js', ['scripts:clean'], function(){
      // Bootstrap depends on jQuery being in front of it
      return gulp.src(['node_modules/jquery/dist/jquery.min.js',
                      'node_modules/bootstrap-sass/assets/javascripts/boostrap.js'
                      ])
            .pipe(size({
              showFiles: true,
              title: '######## Initial ----Lib---- JS size ########'
            }))
            .pipe(concat('lib'))
            .pipe(rename({
              extname: '.min.js'
            }))
            .pipe(uglify())
            .pipe(size({
              showFiles: true,
              title: '####### Final compressed ----Lib---- JS size ########'
            }))
            .pipe(gulp.dest(gulpConstants.paths.buildJs));
    });

}

module.exports = scriptsTask();