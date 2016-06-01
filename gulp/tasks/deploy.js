'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('deploy', () => {
  runSequence(['webpack', 'pug', 'sass', 'copy'], 'ghpages');
});
