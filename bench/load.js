console.time('turbocolor');
require('turbocolor');
console.timeEnd('turbocolor');

console.time('kleur');
require('kleur');
console.timeEnd('kleur');

console.time('ansi-colors');
require('..');
console.timeEnd('ansi-colors');

console.time('chalk');
require('chalk');
console.timeEnd('chalk');
