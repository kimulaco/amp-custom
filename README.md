# amp-custom

[![npm version](https://badge.fury.io/js/amp-custom.svg)](https://badge.fury.io/js/amp-custom)

Optimize CSS source for AMP HTML.

## Install

```shell
npm install --save amp-custom
```

## Use

### API

```js
const AmpCustom = require('amp-custom');
const ampCustom = new AmpCustom();
let cssSource = `@charset "UTF-8";
body {
  font-size: 16px;
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

### CLI

```shell
amp-custom input.css output.css
```

## Method

### optimize(cssSource:string)

```js
let cssSource = `@charset "UTF-8";
body {
  font-size: 16px;
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

### getSize(cssSource:string);

```js
let cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

ampCustom.getSize(cssSource); // 54
```

### isOverMaxByte(cssSource:string)

```js
let cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

ampCustom.isOverMaxByte(cssSource); // false
```

## License

[MIT License](LICENSE).
