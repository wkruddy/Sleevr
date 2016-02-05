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
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    nodemon = require('gulp-nodemon');

var paths = {
  sourceJs: 'source/js/*.js',
  sourceSass: 'source/sass/*.scss',
  buildJs: 'build/js',
  buildCss: 'build/css'
};

// Initialize BrowserSync with the port BS should run on,
// and the express server port
gulp.task('browser:sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:9000',
    port: 5000
  });
});

// Task for starting nodemon to use a local express server
gulp.task('nodemon', function (callback) {

  var started = false;

  return nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  }).on('start', function () {
    // Standard pattern for making sure nodemon doesn't init a bunch

    if (!started) {
      callback();
      started = true;
    }
  });
});

gulp.task('lint', function(){
  return gulp.src(paths.sourceJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(reload({stream: true}));
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
        .pipe(reload({stream: true}));
});


gulp.task('sass:compile', function(){
  return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css',
                  'node_modules/bootstrap/dist/css/bootstrap-theme.css',
                  'source/sass/styles.scss'
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


gulp.task('build', ['clean', 'scripts:concat-min', 'sassy:min'], function(){
  utils.log('################ Gulp Watching for Changes! ################');
});

gulp.task('default', ['build', 'browser:sync'], function(){
  utils.log('################ Gulp Default Process Running! ################');
});