
import log from '../index.js';
log.ok = msg => `${log.green(log.symbols.check)} ${log.bold(msg)}`;
console.log(log.ok('done!'));
