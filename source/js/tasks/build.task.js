import gulp from 'gulp';
import utils from 'gulp-util';
import gulpConstants from '../constants/gulp.constants';

const buildTask = (() => {
    /*
    ########################
    #### Start Up Tasks ####
    ########################
    */

    gulp.task('lib:compile:dist', ['lib:combine:sass:dist', 'lib:combine:js:dist']);
    gulp.task('lib:compile:dev', ['lib:combine:sass:dev', 'lib:combine:js:dev']);

    gulp.task('build:dist', [
        'browser:sync',
        'lib:compile:dist',
        'browserify:dist',
        'sassy:compression:dist',
        'watch:dist'
    ]);

    gulp.task('build:dev', [
        'browser:sync',
        'lib:compile:dev',
        'browserify:dev',
        'sassy:compression:dev',
        'watch:dev'
    ]);

    gulp.task('default', ['build:dev'], () => {
        utils.log('################ Gulp Default Process Running! ################');
    });
})();

export default buildTask;
