'use strict';

const util = require('util');
const ansiRegex = /\u001b\[[0-9]+m/ig;
const colors = { enabled: true, visible: true, ansiRegex };
const symbols = process.platform === 'win32' ? {
  check: '√',
  cross: '×',
  info: 'i',
  line: '─',
  pointer: '>',
  pointerSmall: '»',
  question: '?',
  warning: '‼'
} : {
  check: '✔',
  cross: '✖',
  info: 'ℹ',
  line: '─',
  pointer: '❯',
  pointerSmall: '›',
  question: '?',
  warning: '⚠'
};

const styles = {
  // modifiers
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  // colors
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  // bright colors
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],

  // background colors
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

  // bright background colors
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};

const isString = val => val && typeof val === 'string';
const unstyle = val => isString(val) ? val.replace(ansiRegex, '') : val;
const hasOpen = (input, open) => input.slice(0, open.length) === open;
const hasClose = (input, close) => input.slice(-close.length) === close;
const color = (str, style, hasNewline) => {
  const { open, close } = style;
  if (!(hasOpen(str, open) && hasClose(str, close))) {
    str = style.open + str.replace(style.closeRe, style.open) + style.close;
  }
  if (hasNewline) {
    return str.replace(/(\r?\n)/g, `${style.close}$1${style.open}`);
  }
  return str;
};

function wrap(...args) {
  if (colors.visible === false) return '';

  let str = util.format(...args);
  if (colors.enabled === false) return str;
  if (str.trim() === '') return str;

  const newline = str.includes('\n');
  for (const key of this.stack) {
    str = color(str, styles[key], newline);
  }
  return str;
}

function style(stack) {
  const create = (...args) => wrap.call(create, ...args);
  create.stack = stack;
  Reflect.setPrototypeOf(create, colors);
  return create;
}

function decorate(style) {
  style.open = `\u001b[${style[0]}m`;
  style.close = `\u001b[${style[1]}m`;
  style.closeRe = new RegExp(`\\u001b\\[${style[1]}m`, 'g');
  return style;
}

for (const key of Object.keys(styles)) {
  decorate(styles[key]);
  Reflect.defineProperty(colors, key, {
    get() {
      return style(this.stack ? this.stack.concat(key) : [key]);
    }
  });
}

colors.stripColor = colors.strip = colors.unstyle = unstyle;
colors.styles = styles;
colors.symbols = symbols;
colors.ok = (...args) => {
  return colors.green(symbols.check) + ' ' + util.format(...args);
};

module.exports = colors;
