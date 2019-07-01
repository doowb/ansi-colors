const colors = require('..');

console.log(colors.unstyle(colors.green('This should NOT be green!')));
console.log(colors.red(colors.green('This SHOULD be GREEN!')));
console.log();
console.log(colors.red.unstyle(colors.green('This SHOULD be RED!')));
console.log(colors.unstyle.red.bold(colors.green('This SHOULD be RED and BOLD!')));
