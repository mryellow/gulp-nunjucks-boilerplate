const gulpRequireTasks = require('gulp-require-tasks');

global.BASE_PATH = __dirname;
global.SOURCES_BASE_PATH = __dirname + '/src';

gulpRequireTasks();
