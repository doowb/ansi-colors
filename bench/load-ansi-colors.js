(async () => {
  console.time('ansi-colors');
  await import('../index.js');
  console.timeEnd('ansi-colors');
})()
