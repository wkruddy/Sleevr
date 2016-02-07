'use strict';

var gulp = require('gulp'),
    reload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    utils = require('gulp-util'),
    nano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    nodemon = require('gulp-nodemon');

/*
########################
######## Pathing #######
########################
*/

var paths = {
  sourceJs: 'source/js/*.js',
  sourceSass: 'source/sass/*.scss',
  buildJs: 'build/js/',
  buildCss: 'build/css/',
  libJs: 'lib/js/',
  libSass: 'lib/sass/'
};

/*
########################
#### Start Up Tasks ####
########################
*/

gulp.task('build', ['clean', 'lib:compile', 'scripts:compression', 'sassy:compression'], function(){
  utils.log('################ Gulp Watching for Changes! ################');
});

gulp.task('default', ['build', 'browser:sync'], function(){
  utils.log('################ Gulp Default Process Running! ################');
  gulp.watch('*.html', reload);
  gulp.watch(paths.sourceJs, ['lib:combine:js', 'scripts:clean', 'scripts:compression']);
  gulp.watch(paths.sourceSass, ['lib:combine:sass','sassy:clean', 'sassy:compression']);
});

/*
########################
###### Boot Tasks ######
########################
*/

// Task for starting nodemon to use a local express server
gulp.task('nodemon', function (callback) {

  var started = false;

  return nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/',
      paths.sourceJs
    ]
  }).on('start', function () {
    // Standard pattern for making sure nodemon doesn't init a bunch

    if (!started) {
      callback();
      started = true;
    }
  });
});

// Initialize BrowserSync with the port BS should run on,
// and the express server port
gulp.task('browser:sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:9000',
    port: 5000
  });
});

/*
########################
### JavaScript Tasks ###
########################
*/

gulp.task('lint', function(){
  return gulp.src(paths.sourceJs)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts:compression', function(){
  return gulp.src(paths.sourceJs)
        .pipe(size({
          showFiles: true,
          title: '######## Initial ----Core---- JS size ########'
        }))
        //.pipe(babel())
        .pipe(concat('scripts'))
        .pipe(rename({
          extname: '.min.js'
        }))
        .pipe(uglify())
        .pipe(size({
          showFiles: true,
          title: '######## Final compressed ----Core---- JS size ########'
        }))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream: true}));
});

gulp.task('lib:combine:js', function(){
  // Bootstrap depends on jQuery being in front of it
  return gulp.src([paths.libJs + 'jquery.js', paths.libJs + '*.js'])
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
        .pipe(gulp.dest('build/js'));
});

/*
########################
###### Sass Tasks ######
########################
*/

gulp.task('sassy:compression', function(){
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
        .pipe(gulp.dest(paths.buildCss))
        .pipe(reload({stream: true}));
});

gulp.task('lib:combine:sass', function(){
  return gulp.src([paths.libSass + 'bootstrap/bootstrap.scss'])
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
        .pipe(gulp.dest(paths.buildCss));
});

/*
########################
#### Clean Up Tasks ####
########################
*/
gulp.task('clean', ['scripts:clean', 'sassy:clean']);

gulp.task('lib:compile', ['lib:combine:sass', 'lib:combine:js']);

gulp.task('scripts:clean', function(){
  return gulp.src(paths.buildJs)
        .pipe(clean());
});

gulp.task('sassy:clean', function(){
  return gulp.src(paths.buildCss)
        .pipe(clean());
});