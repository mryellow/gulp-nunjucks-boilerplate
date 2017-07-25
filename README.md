# Retarded Boilerplate

## Stack

* `npm` Package Manager
* `gulp` Task Runner
* `gulp-sass` SASS Preprocessor
* `gulp-data`, `gulp-nunjucks-render` Template Engine
* `browser-sync` Local Development Server
* `modularscale-sass` Proportional Type-Scale

## Development

```bash
git clone git@github.com:mryellow/gulp-nunjucks-boilerplate.git
cd gulp-nunjucks-boilerplate
npm install --global gulp-cli
npm install
gulp
```

## Gulp Tasks

```bash
gulp build # Everything except `dev:watch`
gulp build:html
gulp dev:watch
gulp styles:clean
gulp styles:build
```
