# amp-custom

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/amp-custom.svg)](https://badge.fury.io/js/amp-custom)
[![Build Status](https://github.com/kimulaco/amp-custom/workflows/Test/badge.svg)](https://github.com/kimulaco/amp-custom/actions)
[![Coverage Status](https://coveralls.io/repos/github/kimulaco/amp-custom/badge.svg)](https://coveralls.io/github/kimulaco/amp-custom)

Optimize CSS source for AMP HTML.

If you are using PostCSS, use [postcss-amp-custom](https://github.com/kimulaco/postcss-amp-custom).

## CLI

Run amp-custom by CLI.

```shell
npx amp-custom input.css output.css
```

## API

Install package.

```shell
npm install --save-dev amp-custom
```

Run amp-custom by API.

```js
const AmpCustom = require('amp-custom')
const ampCustom = new AmpCustom()
const cssSource = `@charset "UTF-8";
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
}`

ampCustom.optimize(cssSource) // 'body{font-size:16px}a{color:#39c;text-decoration:none}'
```

### optimize(cssSource: String): String

Optimize CSS for AMP.

```js
const cssSource = `@charset "UTF-8";
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
}`

ampCustom.optimize(cssSource) // 'body{font-size:16px}a{color:#39c;text-decoration:none}'
```

### isOverMaxByte(cssSource: String): Boolean

Check the CSS string size meets the AMP rules (75KB).

```js
const cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}'

ampCustom.isOverMaxByte(cssSource) // false
```

## License

[MIT License](LICENSE).
