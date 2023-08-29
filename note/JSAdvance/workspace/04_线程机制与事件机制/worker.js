function fn(num) {
  return num <= 2 ? 1 : fn(num - 1) + fn(num - 2);
}
var onmessage = function (event) {
  var number = event.data;
  console.log('====================================');
  console.log('分线程接收到主线发送的数据：' + number);
  console.log('====================================');

  var result = fn(number);
  postMessage(result);
  console.log('====================================');
  console.log('分线程向主线程发送数据：' + result);
  console.log('====================================');
};
