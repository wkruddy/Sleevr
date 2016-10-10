
const paths = {
    sourceJs: 'source/js',
    sourceJsAll: 'source/js/*.js',
    sourceSassAll: 'source/sass/*.scss',
    sourceSass: 'source/sass/styles.scss',
    buildJs: 'build/js',
    buildJsAll: 'build/js/*.js',
    buildCss: 'build/css',
    buildCssAll: 'build/css/*.css',
    libJs: 'lib/js/',
    libSass: 'lib/sass/',
    colorPickerCss: 'node_modules/rc-color-picker/assets/index.css',
    bootstrapSass: 'node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
    bootstrapJs: 'node_modules/bootstrap-sass/assets/javascripts/boostrap.js',
    jquery: 'node_modules/jquery/dist/jquery.min.js'
};

const gulpConstants = { paths, reload: () => {} };

export default gulpConstants;
