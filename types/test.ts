// Imported from DefinitelyTyped project.

import * as colors from '../';

let s: string;

s = colors.reset("hello");
s = colors.bold("hello");
s = colors.dim("hello");
s = colors.italic("hello");
s = colors.underline("hello");
s = colors.inverse("hello");
s = colors.hidden("hello");
s = colors.strikethrough("hello");

// colors
s = colors.black("hello");
s = colors.red("hello");
s = colors.green("hello");
s = colors.yellow("hello");
s = colors.blue("hello");
s = colors.magenta("hello");
s = colors.cyan("hello");
s = colors.white("hello");
s = colors.gray("hello");
s = colors.grey("hello");

// bright colors
s = colors.blackBright("hello");
s = colors.redBright("hello");
s = colors.greenBright("hello");
s = colors.yellowBright("hello");
s = colors.blueBright("hello");
s = colors.magentaBright("hello");
s = colors.cyanBright("hello");
s = colors.whiteBright("hello");

// background colors
s = colors.bgBlack("hello");
s = colors.bgRed("hello");
s = colors.bgGreen("hello");
s = colors.bgYellow("hello");
s = colors.bgBlue("hello");
s = colors.bgMagenta("hello");
s = colors.bgCyan("hello");
s = colors.bgWhite("hello");

// bright background colors
s = colors.bgBlackBright("hello");
s = colors.bgRedBright("hello");
s = colors.bgGreenBright("hello");
s = colors.bgYellowBright("hello");
s = colors.bgBlueBright("hello");
s = colors.bgMagentaBright("hello");
s = colors.bgCyanBright("hello");
s = colors.bgRed.white.bold.underline("test");

s = colors.stripColor(colors.red("hello"));
s = colors.unstyle(colors.red("hello"));
s = colors.strip(colors.red("hello"));

s = colors.ok("deployment succeeded!");

s = colors.create().reset("hello");

// common symbols
s = colors.symbols.ballotDisabled;
s = colors.symbols.ballotOff;
s = colors.symbols.ballotOn;
s = colors.symbols.bullet;
s = colors.symbols.bulletWhite;
s = colors.symbols.fullBlock;
s = colors.symbols.heart;
s = colors.symbols.identicalTo;
s = colors.symbols.line;
s = colors.symbols.mark;
s = colors.symbols.middot;
s = colors.symbols.minus;
s = colors.symbols.multiplication;
s = colors.symbols.obelus;
s = colors.symbols.pencilDownRight;
s = colors.symbols.pencilRight;
s = colors.symbols.pencilUpRight;
s = colors.symbols.percent;
s = colors.symbols.pilcrow2;
s = colors.symbols.pilcrow;
s = colors.symbols.plusMinus;
s = colors.symbols.section;
s = colors.symbols.starsOff;
s = colors.symbols.starsOn;
s = colors.symbols.upDownArrow;

// conditional symbols (differ across platforms)
s = colors.symbols.check;
s = colors.symbols.cross;
s = colors.symbols.ellipsisLarge;
s = colors.symbols.ellipsis;
s = colors.symbols.info;
s = colors.symbols.question;
s = colors.symbols.questionSmall;
s = colors.symbols.pointer;
s = colors.symbols.pointerSmall;
s = colors.symbols.radioOff;
s = colors.symbols.radioOn;
s = colors.symbols.warning;

let maybeString: string | undefined;
// unmatched other symbols (may be undefined)
maybeString = colors.symbols.ballotCross;
maybeString = colors.symbols.questionFull;
