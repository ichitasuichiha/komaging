'use strict';

import path from 'path';

const dist = './dist';
const src  = './src';

export default {
  js: {
    uglify: true,
    src: `${src}/js/**/*.js`,
    dist: `${dist}/js`,
    watch: [
      `${src}/js/**/*.js`,
      `${src}/js/components/**/*.vue`
    ]
  },
  pug: {
    src: [
      `${src}/pug/**/*.pug`,
      `!${src}/pug/**/_*.pug`
    ],
    dist: dist,
    watch: `${src}/pug/**/*`
  },
  sass: {
    minifier: true,
    autoprefixer: ['last 2 versions', '> 5%'],
    src: [
      `${src}/sass/**/*.scss`,
      `!${src}/sass/**/_*.scss`
    ],
    dist: `${dist}/css`,
    watch: `${src}/sass/**/*`
  },
  webpack: {
    entry: `${src}/js/app.js`,
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      root: path.resolve(`${src}/js`),
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.(vue)$/,
          exclude: /node_modules/,
          loader: 'vue'
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    }
  },
  deploy: {
    src: `${dist}/**/*`
  },
  resource: {
    src: './resources/**/*',
    dist: dist
  }
}
