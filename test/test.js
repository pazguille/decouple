var handler = decouple(window, 'scroll', function(eve) {
  document.body.setAttribute('data-scroll', window.pageYOffset);
});

describe('decouple', function () {

  it('should be defined.', function () {
    assert(decouple !== undefined);
  });

  it('should be a function.', function () {
    assert(typeof decouple === 'function');
  });

  it('should execute a given function on a given DOM event.', function (done) {
    window.scrollTo(0, 500);

    setTimeout(function() {
      assert(window.pageYOffset == 500);
      assert(document.body.getAttribute('data-scroll') === '500');
      done();
    }, 200);

    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 300);
  });

  it('should return the listener handler.', function () {
    assert(typeof handler === 'function');
  });

});
