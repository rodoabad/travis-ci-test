var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('lint', function() {
    return gulp.src('src/hello.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('scripts', ['lint'], function() {
    return gulp.src('src/hello.js')
        .pipe(rename('hello.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', [
    'lint',
    'scripts'
]);
