import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import size from 'gulp-size';
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';

import gulpConstants from '../constants/gulp.constants';
import utils from 'gulp-util';
import bSync from 'browser-sync';

const browserSync = bSync.create();
const reload = browserSync.reload;

gulpConstants.reload = reload;

const bootTask = (() => {

    // /*
    // ########################
    // ###### Boot Tasks ######
    // ########################
    // */

    gulp.task('browser:sync', () =>
        browserSync.init({
            server: {
                baseDir: './'
            },
            port: 9000
        })
    );
     const bundler = browserify({
          entries: ['source/js/routes.js'],
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

    gulp.task('browserify:dist', () => {

        const bundleScriptsDist = () =>
            watcher.bundle()
                  .on('error', utils.log)
                  .pipe(source('routes.js'))
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
                  .pipe(uglify())
                  .pipe(size({
                      showFiles: true,
                      title: '######## Final compressed ----Core---- JS size ########'
                  }))
                  .pipe(gulp.dest(gulpConstants.paths.buildJs))
                  .pipe(reload({ stream: true }));

        watcher.on('update', bundleScriptsDist);
        return bundleScriptsDist();
    });

    gulp.task('browserify:dev', () => {

        const bundleScriptsDev = () =>
            watcher.bundle()
                  .on('error', utils.log)
                  .pipe(source('routes.js'))
                  .pipe(buffer())
                  .pipe(sourcemaps.init({loadMaps: true}))
                  .pipe(babel())
                  .on('error', utils.log)
                  .pipe(concat('scripts'))
                  .pipe(rename({
                      extname: '.min.js'
                  }))
                  .pipe(sourcemaps.write('./'))
                  .pipe(gulp.dest(gulpConstants.paths.buildJs))
                  .pipe(reload({ stream: true }));

        watcher.on('update', bundleScriptsDev);
        return bundleScriptsDev();
    });
})();

export default bootTask;
