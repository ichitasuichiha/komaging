'use strict';

import gulp    from 'gulp';
import plumber from 'gulp-plumber'
import pug     from 'gulp-pug';
import config  from '../config';

gulp.task('pug', () => {
  return gulp.src(config.pug.src)
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest(config.pug.dist));
});
