'use strict';

const c = require('..');
// const c = require('clorox');
// const c = require('chalk');
console.log(c)

console.log()
console.log('nested colors')
console.log()
console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
console.log(c.yellow('foo', c.red.bold('red'), 'bar', c.cyan('cyan'), 'baz'));
console.log()
console.log()
console.log('chained colors')
console.log()
console.log(c.bold.red('this is a bold red message'));
console.log(c.bold.italic('this is a bold italicized message'));
console.log(c.bold.yellow.italic('this is a bold yellow italicized message'));
console.log(c.green.bold.underline('this is a bold green underlined message'));
console.log()
console.log()
console.log('printf-like formatting')
console.log()
console.log(c.bold.red('%s:%s', 'foo', 'bar', 'baz'));
console.log()
console.log()
console.log(c.bold.bold('%s:%s:%s', 'foo', c.red('bar'), 'baz'));
console.log()
console.log()
console.log('features')
console.log()
console.log(c.red('Some', 'red', 'text', 'to', 'display'));
console.log()
console.log()
