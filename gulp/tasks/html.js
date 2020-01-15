const gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('html', () => {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
});
