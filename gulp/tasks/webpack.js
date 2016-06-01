'use strict';

import gulp          from 'gulp';
import gulpif        from 'gulp-if';
import plumber       from 'gulp-plumber';
import uglify        from 'gulp-uglify';
import webpackStream from 'webpack-stream';
import config        from '../config';

gulp.task('webpack', () => {
  return gulp.src(config.webpack.entry)
    .pipe(plumber())
    .pipe(webpackStream(config.webpack))
    .pipe(gulpif(config.js.uglify, uglify()))
    .pipe(gulp.dest(config.js.dist));
});
