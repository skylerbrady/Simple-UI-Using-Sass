var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/*scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
// gulp.task('sass:watch', function() {
//     gulp.watch('./sass/*scss', ['sass']);
// });

// gulp.task('watche', function() {
//     gulp.watch('./sass/*scss', ['sass']);
// });
// gulp.task('default', 'watche');


// gulp.task('default', ['watch'])

var uglifycss = require('gulp-uglifycss');

gulp.task('css', function() {
    gulp.src('./css/**/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('run', ['sass', 'css']);

gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css', ['css']);
});
gulp.task('default', ['run', 'watch']);