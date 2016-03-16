'use strict';

var requestAnimFrame = (function(context) {
  return context.requestAnimationFrame ||
    context.webkitRequestAnimationFrame ||
    function (callback) {
      context.setTimeout(callback, 1000 / 60);
    };
}(typeof window !== 'undefined' ? window : global));

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
module.exports = decouple;
