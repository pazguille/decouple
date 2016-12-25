if (exports) {
  var fs = require('fs');
  var jsdom = require('jsdom').jsdom;
  var html = fs.readFileSync('./test/index.html', 'utf-8');
  var document = jsdom(html);
  window = document.defaultView;
  var assert = require('better-assert');
  var decouple = require('../');
}

describe('decouple', function () {
  var handler;

  before(function() {
    handler = decouple(window, 'scroll', function (eve) {
      document.body.setAttribute('data-scroll', 'true');
    });
  });

  it('should be a function.', function () {
    assert(typeof decouple === 'function');
  });

  it('should execute a given function on a given DOM event.', function (done) {
    window.dispatchEvent(
      new window.Event('scroll')
    );

    setTimeout(function() {
      assert(document.body.getAttribute('data-scroll') === 'true');
      done();
    }, 200);
  });

  it('should return the listener handler.', function () {
    assert(typeof handler === 'function');
  });

});
