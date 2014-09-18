# decouple

Decouple the DOM events from expensive functions.

## Based on
- [Paul Lewis](https://twitter.com/aerotwist)'s article [Leaner, Meaner, Faster Animations with requestAnimationFrame](http://www.html5rocks.com/en/tutorials/speed/animations).
- [Paul Lewis](https://twitter.com/aerotwist)'s article [Scrolling Performance](http://www.html5rocks.com/en/tutorials/speed/scrolling).
- [How to make faster scroll effects?](https://gist.github.com/Warry/4254579)
- [Fixing a parallax scrolling website to run in 60 FPS](http://kristerkari.github.io/adventures-in-webkit-land/blog/2013/08/30/fixing-a-parallax-scrolling-website-to-run-in-60-fps/)
- [John Resig](https://twitter.com/jeresig)'s article [Learning from Twitter](http://ejohn.org/blog/learning-from-twitter/).

## Demo
[TODO]

## Installation

    $ npm install decouple

### Standalone
Also, you can use the standalone version:
```html
<script src="dist/decouple.js"></script>
```

## How-to
```js
var decouple = require('decouple');
```

Now, define a listener for any HTMLElement:
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
```

Then:
```js
decouple(document.querySelector('#box'), 'scroll', foo);
```

## API

### decouple(node, event, listener)
Decouple the DOM `event` from the `listener` on give `node`.
- `node` {HTMLElement} - A given `HTMLElement`.
- `event` {String} - A given DOM `event`.
- `listener` {Function} - A given `listener` to execute when the given `event` is fired.

```js
decouple(window, 'scroll', fn);
```

## Maintained by
- Guille Paz (Front-end developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
Licensed under the MIT license.

Copyright (c) 2014 [@pazguille](http://twitter.com/pazguille).
