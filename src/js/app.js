'use strict';

import Vue           from 'vue';
import VueRouter     from 'vue-router';
import Vivus         from 'vivus';
import datasetHelper from 'utils/dataset_helper';
import components    from 'components/_components_';

class App {
  constructor() {
    this.initializeVue();
    this.initializeVivus();
  }

  initializeVue() {
    Vue.use(VueRouter);
    const router = new VueRouter();
    const root   = Vue.extend({});

    router.map({
      '/'      : { component: components.root },
      '/info'  : { component: components.info },
      '/credit': { component: components.credit }
    });

    router.start(root, '#content');
  }

  initializeVivus() {
    new Vivus('js-svg-logo', {
      type: 'async',
      duration: 100,
      file: 'images/logo.svg'
    }, () => {
      App.DatasetHelper.set(['content', 'bglayer'], 'bgRender', 'finished');
    });
  }

  static get DatasetHelper() {
    return datasetHelper;
  }
}

window.App = App;
