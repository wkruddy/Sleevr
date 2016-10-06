import gulp from 'gulp';
import clean from 'gulp-clean';
import gulpConstants from '../constants/gulp.constants';

const cleanUpTask = (() => {
    /*
    ########################
    #### Clean Up Tasks ####
    ########################
    */

    gulp.task('scripts:clean', () =>
        gulp.src(gulpConstants.paths.buildJsAll)
              .pipe(clean())
    );

    gulp.task('sassy:clean', () =>
        gulp.src(gulpConstants.paths.buildCssAll)
              .pipe(clean())
    );
})();

export default cleanUpTask;
