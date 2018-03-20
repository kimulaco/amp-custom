# amp-custom

Optimize CSS source for AMP HTML.

## Install

```
npm install --save amp-custom
```

## Use

```js
const ampCustom = require('amp-custom');

let cssSource = `@charset "UTF-8";
body {
  font-size: 16px;
}
@page {
  margin: 15mm;
}
@page hoge {
  size: portrait;
  margin: 15mm;
}
a {
  color: #39c !important;
  text-decoration: none;
}
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@supports not (display: flex) {
  .flexbox {
    overflow: hidden;
  }
  .flexbox div {
    float: left;
  }
}`;

ampCustom.optimize(cssSource); // 'body{font-size:16px}a{color:#39c;text-decoration:none}'
```

## Method

### optimize(cssSource[, option])

```js
let cssSource = `a {
  text-decoration: none !important;
}`;

ampCustom.optimize(cssSource); // 'a{text-decoration:none}'
```

- cssSource `String` - CSS source string.
- option.minify `Boolean` - Whether to minify.

### getSize(cssSource);

```js
const ampCustom = require('amp-custom');

let cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

console.log(ampCustom.getSize(cssSource)); // 54
```

- cssSource `String` - CSS source string.

### isOverMaxByte(cssSource)

```js
const ampCustom = require('amp-custom');

let cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

console.log(ampCustom.isOverMaxByte(cssSource)); // false
```

- cssSource `String` - CSS source string.

## License

[MIT License](https://github.com/kmrk/amp-custom/blob/master/LICENSE).
