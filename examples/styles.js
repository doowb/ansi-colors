
const util = require('util');
const c = require('..');
c.info = (...args) => {
  return c.bold(c.cyan('[info] ')) + c.cyan(...args);
};

console.log(c.info('This is some information'));
console.log(c.bold(c.yellow('[warning]')), c.yellow('This is a warning'));
console.error(c.bold(c.red('[ERROR]')), c.red('Danger! There was an error!'));

console.log(c.yellow.bold.underline.italic('foo'));
console.log(c.white('foo'));
console.log(c.red(`a red ${c.bold.yellow('and bold yellow')} message`));
console.log(c.bold.green(`a bold green ${c.bold.yellow('and bold yellow')} message`));
console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
console.log(c.yellow('foo', c.red.bold('red'), 'bar', c.cyan('cyan'), 'baz'));
console.log(c.bold.red('this is a bold red message'));
console.log(c.bold.italic('this is a bold italicized message'));
console.log(c.bold.yellow.italic('this is a bold yellow italicized message'));
console.log(c.green.bold.underline('this is a bold green underlined message'));
console.log(c.bold.red(util.format('%s:%s', 'foo', 'bar', 'baz')));
console.log(c.bold.bold(util.format('%s:%s:%s', 'foo', c.red('bar'), 'baz')));
console.log(c.red('Some', 'red', 'text', 'to', 'display'));

// // console.log(colors);

