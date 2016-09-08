var gulp = require('gulp'),
    reload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    nano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    gulpConstants = require('../constants/gulp.constants');

function stylesTask() {

    /*
    ########################
    ###### Sass Tasks ######
    ########################
    */

    gulp.task('sassy:compression', ['sassy:clean'], function(){
      return gulp.src('source/sass/styles.scss')
            .pipe(size({
              showFiles: true,
              title: '######## Initial ----Core---- SASS size #######'
            }))
            .pipe(sass({errLogToConsole: true}))
            .pipe(concat('styles'))
            .pipe(rename({
              extname: '.min.css'
            }))
            .pipe(nano())
            .pipe(size({
              showFiles: true,
              title: '####### Final ----Core---- SASS size #######'
            }))
            .pipe(gulp.dest(gulpConstants.paths.buildCss))
            .pipe(reload({stream: true}));
    });

    gulp.task('lib:combine:sass', function(){
      return gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'])
            .pipe(size({
              showFiles: true,
              title: '######## Initial ----Lib---- SASS size #######'
            }))
            .pipe(sass({errLogToConsole: true}))
            .pipe(autoprefixer({
              browsers: ['last 2 versions']
            }))
            .pipe(concat('lib'))
            .pipe(rename({
              extname: '.min.css'
            }))
            .pipe(nano())
            .pipe(size({
              showFiles: true,
              title: '####### Final compressed ----Lib---- SASS size #######'
            }))
            .pipe(gulp.dest(gulpConstants.paths.buildCss));
    });
}

module.exports = stylesTask();