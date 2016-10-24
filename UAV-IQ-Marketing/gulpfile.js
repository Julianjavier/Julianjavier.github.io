var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

var paths = {
    // sass: ['./scss/**/*.scss'],
    javascript: [
        'app/**/*.js'
    ],
    css: [
        'app/**/*.css'
    ]
};

gulp.task('build', function(){
    return gulp.src('app/*.html')
        .pipe(inject(
            gulp.src(paths.javascript,
                {read: false}), {relative: true}
              ))
        .pipe(gulp.dest('app'))
        .pipe(inject(
            gulp.src(paths.css,
            {read: false}), {relative: true}
          ))
        .pipe(gulp.dest('app'));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ['./app']
    }
  })
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync', 'sass'] ,function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
  // Other watchers
});
