'use strict';

const { Suite } = require('benchmark');
const turbocolor = require('turbocolor');
const chalk = require('chalk');
const kleur = require('kleur');
const colors = require('..');
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
  'bgCyan'
];

const cycle = (e, newline) => {
  process.stdout.write('\u001b[G');
  process.stdout.write(`  ${e.target}` + (newline ? '\n' : ''));
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
    names.forEach(name => colors[name]('foo'));
  })
  .add('kleur', () => {
    names.forEach(name => kleur[name]('foo'));
  })
  .add('turbocolor', () => {
    names.forEach(name => turbocolor[name]('foo'));
  })
  .add('chalk', () => {
    names.forEach(name => chalk[name]('foo'));
  })
  .run();

bench('Chained colors')
  .add('ansi-colors', () => {
    names.forEach(name => colors[name].bold.underline.italic('foo'));
  })
  .add('kleur', () => {
    names.forEach(name => kleur[name].bold.underline.italic('foo'));
  })
  .add('turbocolor', () => {
    names.forEach(name => turbocolor[name].bold.underline.italic('foo'));
  })
  .add('chalk', () => {
    names.forEach(name => chalk[name].bold.underline.italic('foo'));
  })
  .run();

bench('Nested colors')
  .add('ansi-colors', () => fixture(colors))
  .add('kleur', () => fixture(kleur))
  .add('turbocolor', () => fixture(turbocolor))
  .add('chalk', () => fixture(chalk))
  .run();

function fixture(lib) {
  return lib.red(`a red ${lib.white('red')} red ${lib.red('red')} red ${lib.gray('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.blue('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')}red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')}red ${lib.green('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.magenta('red')} red ${lib.red('red')}red ${lib.red('red')} red ${lib.cyan('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.yellow('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} red ${lib.red('red')} message`);
}
