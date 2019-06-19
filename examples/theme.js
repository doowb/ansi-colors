const colors = require('..');

colors.theme({
  primary: 'yellow',
  error: colors.red,
  strong: 'bold',
  em: 'underline'
});

colors.theme({
  secondary: 'primary',
  warning: 'error'
});

const { primary, error, strong, red, bold, yellow, underline, secondary, warning } = colors;

console.log(colors.primary.bold('Foo'));
console.log(colors.error.strong.em('Foo'));
console.log('---');
console.log(primary.bold('Foo'));
console.log(error.strong.em('Foo'));
console.log(strong.em('Foo'));
console.log('---');
console.log(yellow.bold('Foo'));
console.log(red.bold.underline('Foo'));
console.log(bold.underline('Foo'));
console.log('---');
console.log(secondary('Foo'));
console.log(secondary.bold('Foo'));
console.log(secondary.strong('Foo'));
console.log(warning('Foo'));
console.log(warning.underline('Foo'));

console.log('---');
colors.alias('warning', colors.green);
console.log(bold.warning('Foo'));
console.log(colors.warning('Foo'));
console.log('---');

colors.warning = colors.red;
console.log(warning.bold('Foo'));
console.log(bold.underline.warning('Foo'));
console.log(colors.warning('Foo'));

console.log('---');
colors.yellow = colors.blue;
colors.bold = colors.dim;
colors.dim = bold;
console.log(yellow.bold('Foo'));
console.log(colors.yellow.dim('Foo'));
console.log(red.bold.underline('Foo'));
console.log(bold.underline('Foo'));
console.log('---');
