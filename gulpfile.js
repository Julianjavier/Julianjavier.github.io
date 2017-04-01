var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var modRewrite  = require('connect-modrewrite');
var awspublish = require('gulp-awspublish');

var paths = {
    javascript: [
        'app/js/**/*.js',
        'app/js/*.js',
    ],
    css: [
      'app/css/*.css',
    ]
};

gulp.task('inject', function(){
  return gulp.src('app/index.html')
    .pipe(inject(
        gulp.src(paths.javascript,
            {read: false}), {relative: true}))
    .pipe(gulp.dest('app'))
    .pipe(inject(
        gulp.src(paths.css,
        {read: false}), {relative: true}))
    .pipe(gulp.dest('app'));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('default', ['inject']);

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      middleware: [
        modRewrite([
          '^[^\\.]*$ /index.html [L]'
        ])
      ]
    },
    notify: false,
    open: false
  })
});

// gulp.task('serve', function() {
//   connect.server({
//     root: 'app',
//     port: 3000,
//     host: '127.0.0.1',
//     fallback: 'index.html',
//     livereload: true
//   });
// });

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/views/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});


var localConfig = {
  buildSrc: './app/**/*',
  getAwsConf: function (environment) {
    var conf = require('./config/aws.js');
    if (!conf[environment]) {
      throw 'No aws conf for env: ' + environment;
    }
    if (!conf[environment + 'Headers']) {
      throw 'No aws headers for env: ' + environment;
    }
    return { keys: conf[environment], headers: conf[environment + 'Headers'] };
  }
};

gulp.task('s3:production', function() {
  var awsConf = localConfig.getAwsConf('production');
  var publisher = awspublish.create(awsConf.keys);
  return gulp.src(localConfig.buildSrc)
    .pipe(awspublish.gzip({ ext: '' }))
    .pipe(publisher.publish(awsConf.headers))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
