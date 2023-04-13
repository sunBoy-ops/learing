const fs = require('fs');
const process = require('process');
/*
同步的方式完成文件复制

// 读取文件数据
let data = fs.readFileSync('../../../Web资料/3.30/李荣浩 - 出卖.mp3');

// 写入文件
fs.writeFileSync('../../../Web资料/3.30/李荣浩 - 出卖-2.mp3', data);

console.log(process.memoryUsage()); //占用内存空间的大小
*/

// 创建读取流对象
const rs = fs.createReadStream('../../../Web资料/3.30/李荣浩 - 出卖.mp3');

// 创建写入流对象
const ws = fs.createWriteStream('../../../Web资料/3.30/李荣浩 - 出卖-3.mp3');

// 绑定data事件
// rs.on('data', (chunk) => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   console.log(process.memoryUsage()); //占用内存空间的大小 30949376 => 29M
// });

rs.pipe(ws);
