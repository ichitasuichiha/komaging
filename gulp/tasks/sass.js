'use strict';

import gulp     from 'gulp';
import plumber  from 'gulp-plumber';
import sass     from 'gulp-sass';
import pleeease from 'gulp-pleeease';
import config   from '../config';

gulp.task('sass', () => {
  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(pleeease({
      autoprefixer: {
        browsers: config.sass.autoprefixer
      },
      minifier: config.sass.minifier
    }))
    .pipe(gulp.dest(config.sass.dist));
});
