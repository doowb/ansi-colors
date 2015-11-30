/*!
 * ansi-colors <https://github.com/doowb/ansi-colors>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Module dependencies
 */

var colors = require('lazy-cache')(require);

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */

var fn = require;
require = colors;

/**
 * Lazily required module dependencies
 */

require('ansi-bgblack', 'bgblack');
require('ansi-bgblue', 'bgblue');
require('ansi-bgcyan', 'bgcyan');
require('ansi-bggreen', 'bggreen');
require('ansi-bgmagenta', 'bgmagenta');
require('ansi-bgred', 'bgred');
require('ansi-bgwhite', 'bgwhite');
require('ansi-bgyellow', 'bgyellow');
require('ansi-black', 'black');
require('ansi-blue', 'blue');
require('ansi-bold', 'bold');
require('ansi-cyan', 'cyan');
require('ansi-dim', 'dim');
require('ansi-gray', 'gray');
require('ansi-green', 'green');
require('ansi-grey', 'grey');
require('ansi-hidden', 'hidden');
require('ansi-inverse', 'inverse');
require('ansi-italic', 'italic');
require('ansi-magenta', 'magenta');
require('ansi-red', 'red');
require('ansi-reset', 'reset');
require('ansi-strikethrough', 'strikethrough');
require('ansi-underline', 'underline');
require('ansi-white', 'white');
require('ansi-yellow', 'yellow');

/**
 * Restore `require`
 */

require = fn;

/**
 * Expose `colors` modules
 */

module.exports = colors;
