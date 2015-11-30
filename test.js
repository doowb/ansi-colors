/*!
 * ansi-colors <https://github.com/doowb/ansi-colors>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var colors = require('./');

describe('ansi-colors', function () {
  it('should wrap a string with ansi-bgblack styling:', function () {
    assert.equal(colors.bgblack('string'), '\u001b[40mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bgblue styling:', function () {
    assert.equal(colors.bgblue('string'), '\u001b[44mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bgcyan styling:', function () {
    assert.equal(colors.bgcyan('string'), '\u001b[46mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bggreen styling:', function () {
    assert.equal(colors.bggreen('string'), '\u001b[42mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bgmagenta styling:', function () {
    assert.equal(colors.bgmagenta('string'), '\u001b[45mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bgred styling:', function () {
    assert.equal(colors.bgred('string'), '\u001b[41mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bgwhite styling:', function () {
    assert.equal(colors.bgwhite('string'), '\u001b[47mstring\u001b[49m');
  });

  it('should wrap a string with ansi-bgyellow styling:', function () {
    assert.equal(colors.bgyellow('string'), '\u001b[43mstring\u001b[49m');
  });

  it('should wrap a string with ansi-black styling:', function () {
    assert.equal(colors.black('string'), '\u001b[30mstring\u001b[39m');
  });

  it('should wrap a string with ansi-blue styling:', function () {
    assert.equal(colors.blue('string'), '\u001b[34mstring\u001b[39m');
  });

  it('should wrap a string with ansi-bold styling:', function () {
    assert.equal(colors.bold('string'), '\u001b[1mstring\u001b[22m');
  });

  it('should wrap a string with ansi-cyan styling:', function () {
    assert.equal(colors.cyan('string'), '\u001b[36mstring\u001b[39m');
  });

  it('should wrap a string with ansi-dim styling:', function () {
    assert.equal(colors.dim('string'), '\u001b[2mstring\u001b[22m');
  });

  it('should wrap a string with ansi-gray styling:', function () {
    assert.equal(colors.gray('string'), '\u001b[90mstring\u001b[39m');
  });

  it('should wrap a string with ansi-green styling:', function () {
    assert.equal(colors.green('string'), '\u001b[32mstring\u001b[39m');
  });

  it('should wrap a string with ansi-grey styling:', function () {
    assert.equal(colors.grey('string'), '\u001b[90mstring\u001b[39m');
  });

  it('should wrap a string with ansi-hidden styling:', function () {
    assert.equal(colors.hidden('string'), '\u001b[8mstring\u001b[28m');
  });

  it('should wrap a string with ansi-inverse styling:', function () {
    assert.equal(colors.inverse('string'), '\u001b[7mstring\u001b[27m');
  });

  it('should wrap a string with ansi-italic styling:', function () {
    assert.equal(colors.italic('string'), '\u001b[3mstring\u001b[23m');
  });

  it('should wrap a string with ansi-magenta styling:', function () {
    assert.equal(colors.magenta('string'), '\u001b[35mstring\u001b[39m');
  });

  it('should wrap a string with ansi-red styling:', function () {
    assert.equal(colors.red('string'), '\u001b[31mstring\u001b[39m');
  });

  it('should wrap a string with ansi-reset styling:', function () {
    assert.equal(colors.reset('string'), '\u001b[0mstring\u001b[0m');
  });

  it('should wrap a string with ansi-strikethrough styling:', function () {
    assert.equal(colors.strikethrough('string'), '\u001b[9mstring\u001b[29m');
  });

  it('should wrap a string with ansi-underline styling:', function () {
    assert.equal(colors.underline('string'), '\u001b[4mstring\u001b[24m');
  });

  it('should wrap a string with ansi-white styling:', function () {
    assert.equal(colors.white('string'), '\u001b[37mstring\u001b[39m');
  });

  it('should wrap a string with ansi-yellow styling:', function () {
    assert.equal(colors.yellow('string'), '\u001b[33mstring\u001b[39m');
  });

});
