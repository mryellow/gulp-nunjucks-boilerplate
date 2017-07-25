const browserSync = require('browser-sync').create();
global.BROWSER_SYNC = browserSync;

module.exports = {
  deps: ['build', 'dev:watch'],
  fn: function (gulp, callback) {
    callback();
  },
};
