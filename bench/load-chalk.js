(async () => {
  console.time('chalk');
  await import('chalk');
  console.timeEnd('chalk');
})()
