import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import size from 'gulp-size';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

// import nodemon from 'gulp-nodemon';
import gulpConstants from '../constants/gulp.constants';
import utils from 'gulp-util';
import bSync from 'browser-sync';

const browserSync = bSync.create();
const reload = browserSync.reload;

const bootTask = (() => {

    // /*
    // ########################
    // ###### Boot Tasks ######
    // ########################
    // */

    // // Task for starting nodemon to use a local express server
    // gulp.task('nodemon', function (callback) {

    //   const started = false;

    //   return nodemon({
    //     script: 'server.js',
    //     ignore: [
    //       'gulpfile.js',
    //       'node_modules/',
    //       gulpConstants.paths.sourceJs
    //     ]
    //   }).on('start', function () {
    //     // Standard pattern for making sure nodemon doesn't init a bunch

    //     if (!started) {
    //       callback();
    //       started = true;
    //     }
    //   });
    // });

    // Initialize BrowserSync with the port BS should run on,
    // and the express server port
    // gulp.task('browser:sync', ['nodemon'], function() {
    //   browserSync.init(null, {
    //     proxy: 'http://localhost:9000',
    //     port: 5000
    //   });
    // });
    gulp.task('browser:sync', () =>
        browserSync.init({
            server: {
                baseDir: './'
            },
            port: 9000
        })
    );

    gulp.task('browserify', () => {

        const bundler = browserify({
            entries: ['source/js/app.js'],
            transform: [
              [
                'babelify'
              ]
            ],
            debug: true,
            cache: {},
            packageCache: {},
            fullPaths: true
        });
        const watcher = watchify(bundler);

        const bundleScripts = () =>
            watcher.bundle()
                  .on('error', utils.log)
                  .pipe(source('app.js'))
                  .pipe(buffer())
                  .pipe(size({
                      showFiles: true,
                      title: '######## Initial ----Core---- JS size ########'
                  }))
                  .pipe(babel())
                  .on('error', utils.log)
                  .pipe(concat('scripts'))
                  .pipe(rename({
                      extname: '.min.js'
                  }))

                  // .pipe(uglify())
                  .pipe(size({
                      showFiles: true,
                      title: '######## Final compressed ----Core---- JS size ########'
                  }))
                  .pipe(gulp.dest(gulpConstants.paths.buildJs))
                  .pipe(reload({ stream: true }));

        watcher.on('update', bundleScripts);
        return bundleScripts();
    });
})();

export default bootTask;
