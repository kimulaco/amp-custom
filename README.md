# amp-custom

Optimize CSS source for AMP HTML.

## Install

```shell
npm install --save amp-custom
```

## Use

```js
const ampCustom = require('amp-custom');
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

[MIT License](https://github.com/kmrk/amp-custom/blob/master/LICENSE).
