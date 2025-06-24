import assert from "node:assert";
import colors from '../index.js';

console.log('ESM import')
console.log(assert.equal(typeof colors, 'object') === undefined)
console.log(assert.equal(typeof colors.default, 'undefined') === undefined)