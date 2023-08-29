const fs = require('fs');

// fs.readFile('./为学.md',(err,data)=>{
//   fs.readFile('./插秧歌.md',(err,data2)=>{
//     fs.readFile('./观书有感.md',(err,data3)=>{
//       let result = data +'\r\n'+ data2+'\r\n'+data3;
//       console.log('====================================');
//       console.log(result);
//       console.log('====================================');
//     })
//   })
// })
const p = new Promise((resolve, reject) => {
  fs.readFile('./为学.md', (err, data) => {
    resolve(data);
  });
});
p.then((value) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./插秧歌.md', (err, data) => {
      resolve([value, data]);
    });
  });
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      fs.readFile('./观书有感.md', (err, data) => {
        value.push(data);
        resolve(value);
      });
    });
  })
  .then((value) => {
    console.log('====================================');
    console.log(value.join('\r\n'));
    console.log('====================================');
  });
