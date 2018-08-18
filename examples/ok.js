
const log = require('..');
log.ok = msg => `${log.green(log.symbols.check)} ${log.bold(msg)}`;
console.log(log.ok('done!'));
