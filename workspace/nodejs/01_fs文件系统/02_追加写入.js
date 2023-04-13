// 1.引入 fs 模块
const fs = require('fs');

// 2.追加写入文件
// fs.appendFile('./座右铭.txt', '则其善者而从之，则其不善者而改之', (err) => {
//   if (err) {
//     console.log('写入失败');
//     return;
//   }
//   console.log('写入成功');
// });

// fs.appendFileSync('./座右铭.txt', '\r\n则其善者而从之，则其不善者而改之');

fs.writeFile('./座右铭.txt', '\r\n温故而知新，可以为师矣', { flag: 'a' }, (err) => {
  if (err) {
    console.log('写入失败');
    return;
  }
  console.log('写入成功');
});
