const del = require('del');
const vinylPaths = require('vinyl-paths');

module.exports = gulp =>
  gulp.src(global.BASE_PATH + '/dist/assets/styles/**/*.css')
    .pipe(vinylPaths(del))
    .pipe(gulp.dest(global.BASE_PATH + '/dist'))
;
