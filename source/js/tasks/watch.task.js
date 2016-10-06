import gulp from 'gulp';
import utils from 'gulp-util';
import gulpConstants from '../constants/gulp.constants';

const watchTask = (() => {
    /*
    ########################
    #### Watch Tasks ####
    ########################
    */

    gulp.task('watch:dist', () => {
        gulp.watch('*.html', gulpConstants.reload);
        gulp.watch('*.css', gulpConstants.reload);

        //gulp.watch(gulpConstants.paths.sourceJs, [
        // 'lib:combine:js', 'scripts:clean', 'browserify'
        // ]);
        gulp.watch(gulpConstants.paths.sourceSassAll, [
          'lib:combine:sass:dist', 'sassy:clean', 'sassy:compression:dist'
        ]);
        utils.log('################ Gulp Watching for Changes! ################');
    });

    gulp.task('watch:dev', () => {
        gulp.watch('*.html', gulpConstants.reload);
        gulp.watch(gulpConstants.paths.buildCssAll, gulpConstants.reload);

        //gulp.watch(gulpConstants.paths.sourceJs, [
        // 'lib:combine:js', 'scripts:clean', 'browserify'
        // ]);
        gulp.watch(gulpConstants.paths.sourceSassAll, [
          'lib:combine:sass:dev', 'sassy:clean', 'sassy:compression:dev'
        ]);
        utils.log('################ Gulp Watching for Changes! ################');
    });
})();

export default watchTask;
