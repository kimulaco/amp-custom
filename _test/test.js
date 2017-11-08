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

console.log(ampCustom.optimize(cssSource));
// a{text-decoration:none}
