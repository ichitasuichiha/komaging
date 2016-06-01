'use strict';

import gulp from 'gulp';
import config from '../config';

gulp.task('copy', () => {
  return gulp.src(config.resource.src)
    .pipe(gulp.dest(config.resource.dist));
});