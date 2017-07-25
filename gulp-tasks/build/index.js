module.exports = {
  deps: ['styles:clean', 'styles:build', 'build:imgs', 'build:html'],
  fn: function (gulp, callback) {
    callback();
  },
};
