const gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync'),
	mixins = require('postcss-mixins');

gulp.task('styles', () => {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'))
		.pipe(browserSync.reload({ stream: true }))
});
