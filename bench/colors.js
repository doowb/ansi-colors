const { Suite } = require('benchmark');
const cursor = require('ansi')(process.stdout);
const color = require('..');
const chalk = require('chalk');
const clorox = require('clorox');
const names = [
  'reset',
  'bold',
  'dim',
  'italic',
  'underline',
  'inverse',
  'hidden',
  'strikethrough',
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite'
];

const cycle = (e, nl) => {
  cursor.eraseLine();
  cursor.horizontalAbsolute();
  cursor.write('  ' + e.target);
  if (nl) cursor.write('\n');
};

function bench(name) {
  console.log(`\n# ${name}`);
  const suite = new Suite();
  const res = {
    run: suite.run.bind(suite),
    add: (key, fn) => {
      suite.add(key, {
        onCycle: e => cycle(e),
        onComplete: e => cycle(e, true),
        fn: fn
      });
      return res;
    }
  };
  return res;
}

bench('All Colors')
  .add('ansi-colors', () => {
    names.forEach(name => color[name]('foo'));
  })
  .add('chalk', () => {
    names.forEach(name => chalk[name]('foo'));
  })
  .add('clorox', () => {
    names.forEach(name => clorox[name]('foo').toString());
  })
  .run();

bench('Stacked colors')
  .add('ansi-colors', () => {
    names.forEach(name => color[name].bold.underline.italic('foo'));
  })
  .add('chalk', () => {
    names.forEach(name => chalk[name].bold.underline.italic('foo'));
  })
  .add('clorox', () => {
    names.forEach(name => clorox[name].bold.underline.italic('foo').toString());
  })
  .run();

bench('Nested colors')
  .add('ansi-colors', () => fixture(color))
  .add('chalk', () => fixture(chalk))
  .add('clorox', () => fixture(clorox).toString())
  .run();

function fixture(lib) {
  return lib.red(`a red ${lib.white('red')} red ${lib.red('red')} red ${lib.gray('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.blue('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')}red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')}red ${lib.green('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.magenta('red')} red ${lib.red('red')}red ${lib.red('red')} red ${lib.cyan('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.yellow('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} message`);
}
