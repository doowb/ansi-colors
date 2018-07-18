# ansi-colors [![NPM version](https://img.shields.io/npm/v/ansi-colors.svg?style=flat)](https://www.npmjs.com/package/ansi-colors) [![NPM monthly downloads](https://img.shields.io/npm/dm/ansi-colors.svg?style=flat)](https://npmjs.org/package/ansi-colors) [![NPM total downloads](https://img.shields.io/npm/dt/ansi-colors.svg?style=flat)](https://npmjs.org/package/ansi-colors) [![Linux Build Status](https://img.shields.io/travis/doowb/ansi-colors.svg?style=flat&label=Travis)](https://travis-ci.org/doowb/ansi-colors) [![Windows Build Status](https://img.shields.io/appveyor/ci/doowb/ansi-colors.svg?style=flat&label=AppVeyor)](https://ci.appveyor.com/project/doowb/ansi-colors)

> Easily add ANSI colors to your text and symbols in the terminal.

Please consider following this project's author, [Brian Woodward](https://github.com/doowb), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ansi-colors
```

ansi-colors is a Node.js library for adding colors to text in the terminal. A more performant drop-in replacement for chalk, with no dependencies.

![image](https://user-images.githubusercontent.com/383994/39635445-8a98a3a6-4f8b-11e8-89c1-068c45d4fff8.png)

## Why use this?

* Minimal - No dependencies! ([chalk](https://github.com/chalk/chalk) has 7 dependencies in its tree)
* Safe - Does not modify the `String.prototype`
* [Fast](#benchmarks) - Loads 5x faster and renders styles 10x faster than [chalk](https://github.com/chalk/chalk).
* [Conditional color support](#conditional-color-support)
* Supports [nested colors](#nested-colors)
* Supports [chained colors](#chained-colors)!
* Includes commonly used [symbols](#symbols)
* Exposes a method for [stripping ANSI codes](#strip-ansi-codes)
* [printf-like](#printf-formatting) formatting

See a [comparison to other libraries](#comparison)

## Usage

```js
const c = require('ansi-colors');

console.log(c.red('This is a red string!'));
console.log(c.green('This is a red string!'));
console.log(c.cyan('This is a cyan string!'));
console.log(c.yellow('This is a yellow string!'));
```

![image](https://user-images.githubusercontent.com/383994/39653848-a38e67da-4fc0-11e8-89ae-98c65ebe9dcf.png)

## Features

Colors take multiple arguments.

```js
console.log(c.red('Some', 'red', 'text', 'to', 'display'));
```

### Chained styles

Supports chained styles.

```js
console.log(c.bold.red('this is a bold red message'));
console.log(c.bold.yellow.italic('this is a bold yellow italicized message'));
console.log(c.green.bold.underline('this is a bold green underlined message'));
```

![image](https://user-images.githubusercontent.com/383994/39635780-7617246a-4f8c-11e8-89e9-05216cc54e38.png)

### Nested styles

Supports nested styles.

```js
// using template literals
console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));

// or as arguments
console.log(c.yellow('foo', c.red.bold('red'), 'bar', c.cyan('cyan'), 'baz'));
```

![image](https://user-images.githubusercontent.com/383994/39635817-8ed93d44-4f8c-11e8-8afd-8c3ea35f5fbe.png)

### Conditional color support

Easily enable/disable colors.

```js
const c = require('ansi-colors');

// disable colors manually
c.enabled = false;

// or use a library to automatically detect support
c.enabled = require('color-support').stdout;

console.log(c.red('I will only be colored red if the terminal supports colors'));
```

## printf-like formatting

Uses node's built-in [util.format()](https://nodejs.org/api/util.html#util_util_format_format_args) to achieve printf-like formatting. The first argument is a string containing zero or more placeholder tokens. Each placeholder token is replaced with the converted value from the corresponding argument.

```js
console.log(c.bold.red('%s:%s', 'foo', 'bar', 'baz'));
```

![image](https://user-images.githubusercontent.com/383994/39637118-1a12e682-4f90-11e8-8d22-246fee4abe40.png)

Even works with nested colors!

```js
console.log(c.bold('%s:%s:%s', 'foo', c.red('bar'), 'baz'));
```

![image](https://user-images.githubusercontent.com/383994/39637327-9fc9081a-4f90-11e8-9995-42c43925fc2f.png)

## Strip ANSI codes

Use the `.unstyle` method to manually strip ANSI codes from a string.

```js
console.log(c.unstyle(c.blue.bold('foo bar baz')));
//=> 'foo bar baz'
```

## Available styles

**Note** that bright and bright-background colors are not always supported.

### Colors

* `black`
* `blue`
* `cyan`
* `gray` (U.S.) and `grey` (everyone else)
* `green`
* `magenta`
* `red`
* `white`
* `yellow`

### Bright colors

* `blueBright`
* `cyanBright`
* `greenBright`
* `magentaBright`
* `redBright`
* `whiteBright`
* `yellowBright`

### Background colors

* `bgBlack`
* `bgBlue`
* `bgCyan`
* `bgGreen`
* `bgMagenta`
* `bgRed`
* `bgWhite`
* `bgYellow`

**Bright background colors**

* `bgBlackBright`
* `bgBlueBright`
* `bgCyanBright`
* `bgGreenBright`
* `bgMagentaBright`
* `bgRedBright`
* `bgWhiteBright`
* `bgYellowBright`

### Modifiers

* `bold`
* `dim`
* `hidden`
* `inverse`
* `italic` _(Not widely supported)_

* `reset`
* `strikethrough` _(Not widely supported)_

* `underline`

## Symbols

A handful of common useful symbols are available on the `c.symbols` property.

```js
console.log(c.symbols);
```

### Available symbols

**Windows**

* check:  `√`
* cross:  `×`
* ellipsis: `'...`
* info:  `i`
* line:  `─`
* pointer: `'>`
* pointerSmall:  `»`
* question: `?`
* questionSmall:  `﹖`
* warning:  `‼`

**Other platforms**

* check: `✔`
* cross: `✖`
* ellipsis: `…`
* info: `ℹ`
* line: `─`
* pointer: `❯`
* pointerSmall: `›`
* question: `?`
* questionSmall: `﹖`
* warning: `⚠`

## Benchmarks

MacBook Pro, Intel Core i7, 2.3 GHz, 16 GB.

### Load time

Time it takes to load the module the first time:

```
chalk: 11.795ms
clorox: 1.019ms
ansi-colors: 0.867ms
```

### Performance

```
# All Colors
  ansi-colors x 104,559 ops/sec ±0.80% (91 runs sampled)
  chalk x 8,869 ops/sec ±2.09% (82 runs sampled)
  clorox x 1,315 ops/sec ±2.19% (76 runs sampled)

# Stacked colors
  ansi-colors x 36,208 ops/sec ±0.65% (88 runs sampled)
  chalk x 1,789 ops/sec ±1.77% (80 runs sampled)
  clorox x 528 ops/sec ±2.00% (78 runs sampled)

# Nested colors
  ansi-colors x 42,828 ops/sec ±0.36% (90 runs sampled)
  chalk x 4,082 ops/sec ±1.93% (83 runs sampled)
  clorox x 628 ops/sec ±2.10% (60 runs sampled)
```

## Comparison

| **Feature** | **ansi-colors** | **chalk** | **clorox** | **colors** |
| --- | --- | --- | --- | --- |
| Nested colors | yes | yes | no | yes |
| Chained colors | yes | yes | You must call `.toString()` on result | yes |
| Toggle color support | yes | yes | no | yes |
| printf-like formatting | yes | no | no | no |
| Includes symbols | yes | no | no | no |

## About

### Related projects

* [ansi-wrap](https://www.npmjs.com/package/ansi-wrap): Create ansi colors by passing the open and close codes. | [homepage](https://github.com/jonschlinkert/ansi-wrap "Create ansi colors by passing the open and close codes.")
* [strip-color](https://www.npmjs.com/package/strip-color): Strip ANSI color codes from a string. No dependencies. | [homepage](https://github.com/jonschlinkert/strip-color "Strip ANSI color codes from a string. No dependencies.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** |  
| --- | --- |  
| 21 | [doowb](https://github.com/doowb) |  
| 10 | [jonschlinkert](https://github.com/jonschlinkert) |  
| 6  | [lukeed](https://github.com/lukeed) |  
| 2  | [Silic0nS0ldier](https://github.com/Silic0nS0ldier) |  
| 1  | [chapterjason](https://github.com/chapterjason) |  

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](https://twitter.com/doowb)

### License

Copyright © 2018, [Brian Woodward](https://github.com/doowb).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.7.0, on July 16, 2018._