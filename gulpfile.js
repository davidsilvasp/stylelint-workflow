var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

function compileLess() {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
};

function watch() {
    gulp.watch('./less/**/*.less', compileLess);
}

gulp.task('less', compileLess);
gulp.task('watch', watch);