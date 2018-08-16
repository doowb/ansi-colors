
const colors = require('..');
console.log(colors.unstyle(colors.green('this is not green!')));

const cyan = colors.cyan;
const key = cyan.underline('a');
console.log(cyan('foo'));
