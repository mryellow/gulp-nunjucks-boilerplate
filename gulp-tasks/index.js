const browserSync = require('browser-sync').create();
global.BROWSER_SYNC = browserSync;

module.exports = {
  deps: ['styles:clean', 'styles:build', 'build:html', 'dev:watch'],
  fn: function (gulp, callback) {
    callback();
  },
};
