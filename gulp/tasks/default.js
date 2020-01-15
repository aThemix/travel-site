const gulp = require('gulp');

gulp.task('default', gulp.parallel('styles', 'browser-sync', 'watch'));
