console.log();

import { bold, cyan, gray, green, red, symbols } from '../index.js';
import good = green(symbols.check);
import bad = red(symbols.cross);

console.log(bold(`foo ${cyan.dim('bar')} baz`), good, gray('(ansi-colors)'));

import colorette from 'colorette';
console.log(colorette.bold(`foo ${colorette.cyan(colorette.dim('bar'))} baz`), bad, gray('(colorette)'));

import kleur from 'kleur';
console.log(kleur.bold(`foo ${kleur.cyan.dim('bar')} baz`), bad, gray('(kleur)'));

import chalk from 'chalk';
console.log(chalk.bold(`foo ${chalk.cyan.dim('bar')} baz`), bad, gray('(chalk)'));

console.log();
