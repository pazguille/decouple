/*!
 * decouple - v0.0.2
 *
 * Copyright (c) 2015, @pazguille <guille87paz@gmail.com>
 * Released under the MIT license.
 */
(function(window) {
'use strict';

var requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
}());

function decouple(node, event, fn) {
  var eve,
      tracking = false;

  function captureEvent(e) {
    eve = e;
    track();
  }

  function track() {
    if (!tracking) {
      requestAnimFrame(update);
      tracking = true;
    }
  }

  function update() {
    fn.call(node, eve);
    tracking = false;
  }

  node.addEventListener(event, captureEvent, false);

  return captureEvent;
}

/**
 * Expose decouple
 */
// AMD
if (typeof window.define === 'function' && window.define.amd !== undefined) {
  window.define('decouple', [], function () {
    return decouple;
  });
// CommonJS
} else if (typeof module !== 'undefined' && module.exports !== undefined) {
  module.exports = decouple;
// Browser
} else {
  window.decouple = decouple;
};

}(this));