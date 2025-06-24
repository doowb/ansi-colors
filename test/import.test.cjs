const assert = require("node:assert");
const colors = require('../index.js');

console.log('CommonJS import')
console.log(assert.strictEqual(typeof colors, 'object') === undefined)
console.log(assert.strictEqual(typeof colors.default, 'undefined') === undefined)