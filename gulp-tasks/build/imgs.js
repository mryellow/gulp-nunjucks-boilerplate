module.exports = gulp =>
  gulp.src(global.SOURCES_BASE_PATH + '/**/*[gif,jpg,png]')
    .pipe(gulp.dest(global.BASE_PATH + '/dist'))
;
