import gulp from 'gulp';
import clean from 'gulp-clean';
import gulpConstants from '../constants/gulp.constants';

const cleanUpTask = (() => {
    /*
    ########################
    #### Clean Up Tasks ####
    ########################
    */

    gulp.task('lib:compile', ['lib:combine:sass', 'lib:combine:js']);

    gulp.task('scripts:clean', () =>
        gulp.src(`${gulpConstants.paths.buildJs}/*.js`)
              .pipe(clean())
    );

    gulp.task('sassy:clean', () =>
        gulp.src(`${gulpConstants.paths.buildCss}/*.css`)
              .pipe(clean())
    );
})();

export default cleanUpTask;
