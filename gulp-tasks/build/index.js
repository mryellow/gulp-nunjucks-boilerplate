module.exports = {
  deps: ['styles:clean', 'styles:build', 'build:assets', 'build:html'],
  fn: function (gulp, callback) {
    callback();
  },
};
