const fs = require('fs');

function fn1() {
  return new Promise((resolve, reject) => {
    fs.readFile('./为学.md', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
function fn2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./插秧歌.md', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
function fn3() {
  return new Promise((resolve, reject) => {
    fs.readFile('./观书有感.md', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
async function main() {
  let result1 = await fn1();
  let result2 = await fn2();
  let result3 = await fn3();
  console.log('====================================');
  console.log(result1.toString());
  console.log(result2.toString());
  console.log(result3.toString());
  console.log('====================================');
}
main();
