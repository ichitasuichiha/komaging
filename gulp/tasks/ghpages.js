'use strict';

import gulp    from 'gulp';
import ghPages from 'gulp-gh-pages';
import config  from '../config';

gulp.task('ghpages', () => {
  return gulp.src(config.deploy.src)
    .pipe(ghPages());
});
