import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import nano from 'gulp-cssnano';
import sass from 'gulp-sass';
import size from 'gulp-size';
import autoprefixer from 'gulp-autoprefixer';
import bSync from 'browser-sync';
import gulpConstants from '../constants/gulp.constants';
const browserSync = bSync.create();
const reload = browserSync.reload;

const stylesTask = (() => {

    /*
    ########################
    ###### Sass Tasks ######
    ########################
    */

    gulp.task('sassy:compression', ['sassy:clean'], () =>
        gulp.src('source/sass/styles.scss')
            .pipe(size({
                showFiles: true,
                title: '######## Initial ----Core---- SASS size #######'
            }))
            .pipe(sass({ errLogToConsole: true }))
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
            .pipe(reload({ stream: true }))
    );

    gulp.task('lib:combine:sass', () =>
        gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'])
            .pipe(size({
                showFiles: true,
                title: '######## Initial ----Lib---- SASS size #######'
            }))
            .pipe(sass({ errLogToConsole: true }))
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
            .pipe(gulp.dest(gulpConstants.paths.buildCss))
    );
})();

export default stylesTask;
