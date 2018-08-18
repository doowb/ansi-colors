const lib = process.argv[2] || 'colors';
const libs = {
  chalk: require('chalk'),
  colors: require('..')
};
const color = libs[lib];

console.log('bgBlack:', color.bgBlack('some string'));
console.log('bgBlue:', color.bgBlue('some string'));
console.log('bgCyan:', color.bgCyan('some string'));
console.log('bgGreen:', color.bgGreen('some string'));
console.log('bgMagenta:', color.bgMagenta('some string'));
console.log('bgRed:', color.bgRed('some string'));
console.log('bgWhite:', color.bgWhite('some string'));
console.log('bgYellow:', color.bgYellow('some string'));
console.log('black:', color.black('some string'));
console.log('blue:', color.blue('some string'));
console.log('bold:', color.bold('some string'));
console.log('cyan:', color.cyan('some string'));
console.log('dim:', color.dim('some string'));
console.log('gray:', color.gray('some string'));
console.log('green:', color.green('some string'));
console.log('hidden:', color.hidden('some string'));
console.log('inverse:', color.inverse('some string'));
console.log('italic:', color.italic('some string'));
console.log('magenta:', color.magenta('some string'));
console.log('red:', color.red('some string'));
console.log('reset:', color.reset('some string'));
console.log('strikethrough:', color.strikethrough('some string'));
console.log('underline:', color.underline('some string'));
console.log('white:', color.white('some string'));
console.log('yellow:', color.yellow('some string'));

console.log();
console.log(color.bold(color.cyan('[info]')), color.cyan('This is some information'));
console.log(color.bold(color.yellow('[warning]')), color.yellow('This is a warning'));
console.log(color.bold(color.red('[ERROR]')), color.red('Danger! There was an error!'));
console.log();

console.log(color.red(`a red ${color.white('white')} red ${color.red('red')} red ${color.gray('gray')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.blue('blue')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')}red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')}red ${color.green('green')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.magenta('red')} red ${color.red('red')}red ${color.red('red')} red ${color.cyan('cyan')} red ${color.red('red')} red ${color.red('red')} red ${color.yellow('yellow')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.blue('blue')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} red ${color.red('red')} message`).toString());
