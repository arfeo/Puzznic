const gulp = require('gulp');
const del = require('del');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const tsify = require('tsify');
const tslint = require('gulp-tslint');
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
  gulp.watch('./src/**/*.ts', gulp.series(linter, ts, reload));
  gulp.watch('./src/**/*.scss', gulp.series(scss, reload));
}

function scss() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
}

function linter() {
  return gulp.src('./src/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report());
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
