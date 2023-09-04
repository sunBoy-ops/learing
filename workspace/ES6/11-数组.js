// 1.数组创建
// 1.1 Array.of() 将参数中所有值作为元素形成数组
// console.log(Array.of(1, 2, '3', { a: 4 }));

// 1.2.Array.from(arrayList[,mapFn[,thisArg]]) 将类数组对象或可迭代对象转化为数组
/* console.log(Array.from([1, 2]));
console.log(Array.from([1, 2], (n) => (n = n * 2))); */
/* let map = {
  do: function (n) {
    return n * 2;
  },
};
console.log(
  Array.from(
    [1, 2],
    function (n) {
      return this.do(n);
    },
    map
  )
); */
// 类数组对象：一个类数组对象必须含有 length 属性，且元素属性名必须是数值或者可转换为数值的字符。
/* let arr = Array.from({
  0: '1',
  1: '2',
  2: '3',
  length: 3,
});
console.log(arr); //[ '1', '2', '3' ] */

// 2.扩展的方法
// 2.1 查找:查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素
/* let arr = Array.of(1, 2, 3, 4);
console.log(arr.find((item) => item > 2));
console.log([, 1].find((n) => true)); */
// findIndex() 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。
/* let arr = Array.of(1, 2, 1, 3);
console.log(arr.findIndex((n) => n >= 2)); */
// 2.2 填充fill(参数1,参数2,参数3)
// 参数1：填充值，参数2：填充其实索引，参数3：填充结束值
/* let arr = Array.of(1, 2, 3, 4);
console.log(arr.fill(0, 2, 3)); */
// 2.3包含 includes() 返回布尔值
console.log([1, 2, 3].includes(1));
