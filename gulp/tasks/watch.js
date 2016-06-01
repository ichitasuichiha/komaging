'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['default'], () => {
  gulp.watch(config.js.watch,   ['webpack']);
  gulp.watch(config.pug.watch,  ['pug']);
  gulp.watch(config.sass.watch, ['sass']);
});
