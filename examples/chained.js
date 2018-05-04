
console.time('time');
const colors = require('..');
colors.success = (...args) => colors.bold.green(...args);
colors.ok = (...args) => `${colors.success('✔')} ${colors.bold(...args)}`;
console.log(colors.yellow('this is a message'))
console.log(colors.bold.underline.red('foo'));
console.log(colors.yellow.bold.underline.italic('foo'));
console.log(colors.success('Hi, %s!', 'Brian'));
console.log(colors.ok('File "%s" was written to "/%s"', 'foo', 'bar'));
console.timeEnd('time');
