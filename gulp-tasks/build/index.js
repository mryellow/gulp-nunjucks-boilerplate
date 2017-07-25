module.exports = {
  deps: ['styles:clean', 'styles:build', 'build:html'],
  fn: function (gulp, callback) {
    callback();
  },
};
