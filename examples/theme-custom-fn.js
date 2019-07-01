const colors = require('..');

colors.theme({
  success: 'blue',
  em: 'italic',
  strong: 'bold',
  s: 'strikethrough',
  u: 'underline',
  ok(message) {
    let { unstyle, success, symbols } = colors;
    let plain = unstyle(message);
    let match = plain.match(/^( +)(.*)$/);
    let prefix = match ? ' '.repeat(match[1].length) : '';
    let rest = match ? match[2] : message;
    if (rest !== message) {
      rest = message.replace(plain, rest);
    }
    return prefix + success(symbols.check) + ' ' + rest;
  }
});

const { ok, em, s, u } = colors;

console.log(ok('     Success!'));
console.log(ok.em.s('     Success!'));
console.log(em.ok.s('     Success!'));
console.log(em.ok.u('     Success!'));

console.log(em.s.ok('     Success!'));
console.log(s.ok.em('     Success!'));
console.log(s.em.ok('     Success!'));
console.log(u.em.ok('     Success!'));
