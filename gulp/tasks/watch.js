const gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browser-sync', (done) => {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	done();
});

gulp.task('watch', (done) => {
	gulp.watch('./app/index.html', gulp.parallel('html'));
	gulp.watch('./app/assets/styles/**/*.css', gulp.parallel('styles'));
	done();
});
