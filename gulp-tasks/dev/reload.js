module.exports = {
  deps: ['build'],
  fn: gulp => {
    global.BROWSER_SYNC.reload();
  },
};
