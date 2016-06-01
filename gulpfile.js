var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var gulpCopy = require('gulp-copy');
var flatten = require('gulp-flatten');
var usemin = require('gulp-usemin');
var htmlmin = require('gulp-htmlmin');
var ngTemplates = require('gulp-ng-template');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gzip = require('gulp-gzip');
var clean = require('gulp-clean');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./www/js/**/*.js'],
  templates: ['./www/templates/**']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/dist/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('clean', function() {
  gulp.src('./www/dist', { read: false })
    .pipe(clean());
});

// uglify, minify, concat , gzip js
gulp.task('uglify-js', function() {
  gulp.src(paths.js)
    .pipe(concat('script.js'))
    .pipe(uglify())
    // .pipe(gzip({append: false }))
    .pipe(gulp.dest('./www/dist/js'));
});

gulp.task('templates', function () {
	return gulp.src(paths.templates)
		.pipe(ngTemplates({
        module: 'IonicGreen',
        filename: 'templates.js'
    }))
		.pipe(gulp.dest('./www/dist/js'));
});

gulp.task('imagemin', function() {
  gulp.src('./www/img/**/*.{png,jpg,jpeg,gif,svg}')
  .pipe(imagemin({
    progressive : true,
    svgoPlugins : [ {
      removeViewBox : false
    } ],
    use : [ pngquant() ]
  }))
  .pipe(gulp.dest('./www/dist/img'))
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
