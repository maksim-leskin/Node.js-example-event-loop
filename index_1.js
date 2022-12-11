const fs = require('node:fs');

console.log('A console.log', performance.now());

fs.readFile('./text.txt', 'utf8', (err, data) => {
    console.log('B readFile', performance.now());
});

setTimeout(() => {
  console.log('C setTimeout', performance.now());
});

setTimeout(() => {
  console.log('D setTimeout 100', performance.now());
}, 100);

setTimeout(() => {
  console.log('E setTimeout 0', performance.now());
}, 0);

setImmediate(() => {
  console.log('F setImmediate', performance.now());
});

fs.writeFile('text.txt', 'Hello Node.js', 'utf8', () => {
  console.log('G writeFile', performance.now());
});

console.log('H console.log', performance.now());