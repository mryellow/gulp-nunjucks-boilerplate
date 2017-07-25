module.exports = {
  deps: ['build:html'],
  fn: function (gulp, callback) {
    global.BROWSER_SYNC.reload();
    callback();
  },
};
