# amp-custom

Optimize CSS source for AMP HTML.

## Install
~~~
npm install --save amp-custom
~~~

## Use
~~~
const ampCustom = require('amp-custom');

let cssSource = `@charset "UTF-8";
@import "common.css";
@page hoge {
  size: portrait;
  margin: 15mm;
}
@viewport {
  min-width: 640px;
  max-width: 800px;
}
a {
  text-decoration: none !important;
}`;

ampCustom.optimize(cssSource); // a{text-decoration:none}
~~~

## Method

### optimize(cssSource[, option])
~~~
let cssSource = `a {
  text-decoration: none !important;
}`;

ampCustom.optimize(cssSource); // 'a{text-decoration:none}'
~~~

- `cssSource` {string}
- `option` {object}
- `option.minify` {boolean}

### getSize(cssSource);
~~~
const ampCustom = require('amp-custom');

let cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

console.log(ampCustom.getSize(cssSource)); // 54
~~~

- `cssSource` {string}

### isOverMaxByte(cssSource)
~~~
const ampCustom = require('amp-custom');

let cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

console.log(ampCustom.isOverMaxByte(cssSource)); // false
~~~

- `cssSource` {string}

## License
[MIT License](https://github.com/kmrk/amp-custom/blob/master/LICENSE).

## TODO
- @document
- @supports
