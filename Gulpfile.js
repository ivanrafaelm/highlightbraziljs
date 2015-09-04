var gulp = require("gulp"),
	babel = require("gulp-babel"),
	watch = require("gulp-watch");

gulp.task("default", function () { });

gulp.task('watch', function(){
	gulp.watch('src/*.js', ['ec5to6']);
});


gulp.task("ec5to6", function () {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
