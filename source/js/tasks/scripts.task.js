import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import jshint from 'gulp-jshint';
import babel from 'gulp-babel';
import size from 'gulp-size';
import gulpConstants from '../constants/gulp.constants';

const scriptsTask = (() => {

    /*
    ########################
    ### JavaScript Tasks ###
    ########################
    */

    gulp.task('lint', () =>
        gulp.src(gulpConstants.paths.sourceJs)
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
    );

    // gulp.task('scripts:compression', ['scripts:clean'],() =>
    //      gulp.src(gulpConstants.paths.sourceJs)
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
    //         .pipe(reload({stream: true}))
    // );

    gulp.task('lib:combine:js', () =>

      // Bootstrap depends on jQuery being in front of it
        gulp.src(['node_modules/jquery/dist/jquery.min.js',
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
            .pipe(gulp.dest(gulpConstants.paths.buildJs))
    );
})();

export default scriptsTask;
