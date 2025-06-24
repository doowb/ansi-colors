
import util from 'node:util';
console.time('time');
import colors from '../index.js'
colors.success = (...args) => colors.bold.green(util.format(...args));
colors.ok = (...args) => `${colors.success('✔')} ${colors.bold(util.format(...args))}`;
console.log(colors.yellow('this is a message'))
console.log(colors.bold.underline.red('foo'));
console.log(colors.yellow.bold.underline.italic('foo'));
console.log(colors.success('Hi, %s!', 'Brian'));
console.log(colors.ok('File "%s" was written to "/%s"', 'foo', 'bar'));
console.timeEnd('time');
