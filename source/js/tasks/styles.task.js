import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import nano from 'gulp-cssnano';
import sass from 'gulp-sass';
import size from 'gulp-size';
import autoprefixer from 'gulp-autoprefixer';
import gulpConstants from '../constants/gulp.constants';

const stylesTask = (() => {

    /*
    ########################
    ###### Sass Tasks ######
    ########################
    */

    gulp.task('sassy:compression:dist', ['sassy:clean'], () =>
        gulp.src(gulpConstants.paths.sourceSass)
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
    );

    gulp.task('lib:combine:sass:dist', () =>
        gulp.src([
                gulpConstants.paths.bootstrapSass,
                gulpConstants.paths.colorPickerCss
            ])
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

    gulp.task('sassy:compression:dev', ['sassy:clean'], () =>
        gulp.src(gulpConstants.paths.sourceSass)
            .pipe(sass({ errLogToConsole: true }))
            .pipe(concat('styles'))
            .pipe(rename({
                extname: '.min.css'
            }))
            .pipe(nano())
            .pipe(gulp.dest(gulpConstants.paths.buildCss))
    );

    gulp.task('lib:combine:sass:dev', () =>
        gulp.src([
                gulpConstants.paths.bootstrapSass,
                gulpConstants.paths.colorPickerCss
            ])
            .pipe(sass({ errLogToConsole: true }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(concat('lib'))
            .pipe(rename({
                extname: '.min.css'
            }))
            .pipe(nano())
            .pipe(gulp.dest(gulpConstants.paths.buildCss))
    );
})();

export default stylesTask;
