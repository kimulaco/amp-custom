const ampCustom = require('amp-custom');
const cssSource = 'body{font-size:16px}a{color:#39c;text-decoration:none}';

console.log('getSize: ' + ampCustom.getSize(cssSource));
console.log('isOverMaxByte: ' + ampCustom.isOverMaxByte(cssSource));
console.log('optimize: ' + ampCustom.optimize(cssSource));
