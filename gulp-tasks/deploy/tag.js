const git = require('gulp-git');
const fs = require('fs');
const package = JSON.parse(fs.readFileSync('./package.json'));

module.exports = gulp => {
  tag = 'v' + package.version;
  // Only even semver can be production version
  if (/\d+\.\d+\.\d*[02468]/.test(package.version)) {
    console.log('Production ' + tag);
    git.tag(tag, 'Release ' + tag, function (err) {
      if (err) throw err;
    });

    git.push('origin', { args: ' --tags' }, function (err) {
      if (err) throw err;
    });
  } else {
    console.log('Development ' + tag);
  }
};
