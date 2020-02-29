/* eslint-disable */
const gulp = require('gulp');
const del = require('del');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const tsify = require('tsify');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function clean() {
  return del(['dist']);
}

function build(done) {
  gulp.series(
    clean,
    combine,
    linter,
    ts,
    scss,
    assets,
  )(done);
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });

  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function run(done) {
  gulp.series(
    build,
    serve,
    watchers,
  )(done);
}

function watchers() {
  gulp.watch('./src/**/*.ts', gulp.series(linter, ts, assets, reload));
  gulp.watch('./src/**/*.scss', gulp.series(scss, assets, reload));
}

function scss() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
}

function assets() {
  return gulp.src('./src/assets/images/**/*')
    .pipe(gulp.dest('./dist/static'));
}

function linter() {
  return gulp.src('./src/**/*.ts')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function ts() {
  return browserify().add('./src/index.ts')
    .plugin(tsify)
    .bundle().on('error', function (error) {
      console.error(error.toString());
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
}

function combine() {
  return gulp.src('./public/index.html')
    .pipe(gulp.dest('./dist'));
}

gulp.task('build', build);
gulp.task('default', run);
