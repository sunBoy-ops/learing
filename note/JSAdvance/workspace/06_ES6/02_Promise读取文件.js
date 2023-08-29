const fs = require('fs');

// fs.readFile('./为学.md', (err, data) => {
//   // 如果失败，抛出错误
//   if (err) throw err;
//   // 如果没有出错，则输出内容
//   console.log(data.toString());
// });

const p = new Promise(function (resolve, reject) {
  fs.readFile('./为学.md', (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});
p.then(
  function (value) {
    console.log('====================================');
    console.log(value.toString());
    console.log('====================================');
  },
  function (reason) {
    console.error('没有找到！！');
  }
);
