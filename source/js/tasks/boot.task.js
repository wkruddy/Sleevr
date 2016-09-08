var gulp = require('gulp'),
    reload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    size = require('gulp-size'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    gulpConstants = require('../constants/gulp.constants');

function bootTask () {
        
    /*
    ########################
    ###### Boot Tasks ######
    ########################
    */

    // Task for starting nodemon to use a local express server
    gulp.task('nodemon', function (callback) {

      var started = false;

      return nodemon({
        script: 'server.js',
        ignore: [
          'gulpfile.js',
          'node_modules/',
          gulpConstants.paths.sourceJs
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
    // gulp.task('browser:sync', ['nodemon'], function() {
    //   browserSync.init(null, {
    //     proxy: 'http://localhost:9000',
    //     port: 5000
    //   });
    // });
    gulp.task('browser:sync', function(){
      browserSync.init({
        server: {
          baseDir: './'
        },
        port: 9000
      });
    });

    gulp.task('browserify', function(){

      var bundler = browserify({
        entries: ['source/js/app.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
      });
      var watcher = watchify(bundler);

      var bundleScripts = function(){

        return watcher.bundle()
              .pipe(source('app.js'))
              .pipe(buffer())
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
              .pipe(gulp.dest(gulpConstants.paths.buildJs))
              .pipe(reload({stream: true}));
      };

      watcher.on('update', bundleScripts);
      return bundleScripts();
    });    
}

module.exports = bootTask();
