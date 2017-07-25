module.exports = gulp => {
  global.BROWSER_SYNC.init({
    server: global.BASE_PATH + '/dist',
  });

  gulp.watch(global.SOURCES_BASE_PATH + '/assets/styles/**/*.scss', ['styles:build']);
  gulp.watch(global.SOURCES_BASE_PATH + '/**/*.html', ['dev:reload']);
};
