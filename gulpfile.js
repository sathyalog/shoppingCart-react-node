var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');

gulp.task('default', ['server', 'sass-watch']);

gulp.task('server', function(){
	connect.server({
		port: 8080,
		host: 'localhost'
	})
});

gulp.task('sass-watch', function(){
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
	gulp.src('./sass/**/*.scss')
		.pipe(sass.sync())
		.pipe(gulp.dest('./static/css'));
});
