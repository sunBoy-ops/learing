// 1.导入 fs 模块
const fs = require('fs');

// 2.创建读取流对象
const rs = fs.createReadStream('../../../Web资料/3.30/李荣浩 - 出卖.mp3');

// 3.绑定data 事件 chunk 块
rs.on('data', (chunk) => {
  console.log(chunk.length); //65536字节 => 64KB
});

// 4.end  可选事件
rs.on('end', () => {
  console.log('读取完成');
});
