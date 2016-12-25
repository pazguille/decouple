# decouple

[![NPM version][npm-image]][npm-link] [![License][lic-image]][npm-link] [![Build status][travis-image]][travis-link] [![Coverage Status][coverage-image]][coverage-link] [![Dependency status][deps-image]][deps-link] [![devDependency status][devdeps-image]][devdeps-link] [![downloads][dt-image]][npm-link]

> Decouple the DOM events from expensive functions.

## Based on
- [Paul Lewis](https://twitter.com/aerotwist)'s article [Leaner, Meaner, Faster Animations with requestAnimationFrame](http://www.html5rocks.com/en/tutorials/speed/animations).
- [Paul Lewis](https://twitter.com/aerotwist)'s article [Scrolling Performance](http://www.html5rocks.com/en/tutorials/speed/scrolling).
- [How to make faster scroll effects?](https://gist.github.com/Warry/4254579)
- [Fixing a parallax scrolling website to run in 60 FPS](http://kristerkari.github.io/adventures-in-webkit-land/blog/2013/08/30/fixing-a-parallax-scrolling-website-to-run-in-60-fps/)
- [John Resig](https://twitter.com/jeresig)'s article [Learning from Twitter](http://ejohn.org/blog/learning-from-twitter/).


## Installation

    $ npm install decouple

    $ bower install decouple

    $ spm install decouple

    $ component install pazguille/decouple

## Usage
```js
function foo(event) {
  console.log('foo');

  // The function receive the scroll event as parameter.
  console.log(event);

  // The function context is the given node.
  console.log(this.scrollTop);
}

function bar() {
  console.log('bar');
}

decouple(document.querySelector('#box'), 'scroll', foo);
```

## API

### decouple(node, event, listener)
Decouple the DOM `event` from the `listener` on give `node`. Returns the listener handler.
- `node` {HTMLElement} - A given `HTMLElement`.
- `event` {String} - A given DOM `event`.
- `listener` {Function} - A given `listener` to execute when the given `event` is fired.

```js
decouple(window, 'scroll', fn);
```

## With ❤ by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [https://pazguille.me](https://pazguille.me)

## License
MIT license. Copyright © 2016.

[npm-image]: https://img.shields.io/npm/v/decouple.svg
[lic-image]: https://img.shields.io/npm/l/decouple.svg
[npm-link]: https://npmjs.org/package/decouple
[travis-image]: https://img.shields.io/travis/pazguille/decouple.svg
[travis-link]: https://travis-ci.org/pazguille/decouple
[deps-image]: https://img.shields.io/david/pazguille/decouple.svg
[deps-link]: https://david-dm.org/pazguille/decouple
[devdeps-image]: https://img.shields.io/david/dev/pazguille/decouple.svg
[devdeps-link]: https://david-dm.org/pazguille/decouple#info=devDependencies
[dt-image]: https://img.shields.io/npm/dt/decouple.svg
[coverage-image]: https://img.shields.io/coveralls/pazguille/decouple.svg
[coverage-link]: https://coveralls.io/github/pazguille/decouple
