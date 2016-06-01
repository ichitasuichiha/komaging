'use strict';

export default class datasetHelper {
  static set(nodeIds, name, value) {
    if (nodeIds instanceof Array) {
      nodeIds.forEach((nodeId) => {
        this._set(nodeId, name, value);
      });
    } else {
      this._set(nodeIds, name, value);
    }
  }

  static _set(nodeId, name, value) {
   const elem = document.getElementById(nodeId);
    if (typeof elem !== 'undefined') {
      elem.dataset[name] = value;
    }
  }
}
