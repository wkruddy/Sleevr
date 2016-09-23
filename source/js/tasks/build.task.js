import gulp from 'gulp';
import utils from 'gulp-util';
import gulpConstants from '../constants/gulp.constants';
import bSync from 'browser-sync';

const browserSync = bSync.create();
const reload = browserSync.reload;

const buildTask = (() => {
    /*
    ########################
    #### Start Up Tasks ####
    ########################
    */

    gulp.task('build', ['lib:compile', 'browserify', 'sassy:compression'], () => {
        utils.log('################ Gulp Watching for Changes! ################');
    });

    gulp.task('default', ['build', 'browser:sync'], () => {
        utils.log('################ Gulp Default Process Running! ################');
        gulp.watch('*.html', reload);

        //gulp.watch(gulpConstants.paths.sourceJs, [
        // 'lib:combine:js', 'scripts:clean', 'browserify'
        // ]);
        gulp.watch(gulpConstants.paths.sourceSass, [
          'lib:combine:sass', 'sassy:clean', 'sassy:compression'
        ]);
    });
})();

export default buildTask;
