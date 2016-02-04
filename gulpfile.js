'use strict';

var gulp = require('gulp'),
		reload = require('gulp-livereload'),
		concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
		clean = require('gulp-clean'),
		utils = require('gulp-util'),
    nano = require('gulp-cssnano'),
		sass = require('gulp-sass');

var paths = {
  sourceJs: 'source/js/*.js',
  sourceSass: 'source/sass/*.scss',
  buildJs: 'build/js',
  buildCss: 'build/css'
};

gulp.task('lint', function(){
  return gulp.src(paths.sourceJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(reload());
});

gulp.task('scripts:concat-min', ['lint'], function(){
  return gulp.src([paths.sourceJs,
                  'node_modules/jquery/dist/jquery.js',
                  'node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(concat('scripts'))
        .pipe(rename({
          extname: '.min.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(reload());
});


gulp.task('sass:compile', function(){
  return gulp.src(['source/sass/styles.scss',
                  'node_modules/bootstrap/dist/css/bootstrap.css',
                  'node_modules/bootstrap/dist/css/bootstrap-theme.css'
        ])
        .pipe(sass())
        .pipe(gulp.dest(paths.buildCss));
});

gulp.task('sassy:min', ['sass:compile'], function(){
  return gulp.src('build/css/*.css')
        .pipe(concat('styles'))
        .pipe(rename({
          extname: '.min.css'
        }))
        .pipe(nano())
        .pipe(gulp.dest(paths.buildCss));
});

gulp.task('clean', function(){
  return gulp.src(['build/js/*.js', 'build/css/*.css'])
        .pipe(clean());
});

gulp.task('watch', function(){
  reload.listen({reloadPage: 'index.html'});
  gulp.watch([paths.sourceJs, paths.sourceSass], ['build']);
});

gulp.task('build', ['clean', 'scripts:concat-min', 'sassy:min'], function(){
  utils.log('################ Gulp Watching for Changes! ################');
});

gulp.task('default', ['build', 'watch'], function(){
  utils.log('################ Gulp Default Process Running! ################');
});