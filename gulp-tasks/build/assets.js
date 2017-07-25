module.exports = gulp =>
  gulp.src(global.SOURCES_BASE_PATH + '/**/*' + global.ASSET_TYPES)
    .pipe(gulp.dest(global.BASE_PATH + '/dist'))
;
