// 1.引入 fs 模块
const fs = require('fs');

// 2.异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// });

// 同步读取
let rf = fs.readFileSync('./观书有感.txt');
console.log(rf.toString());
