// 1. Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
var myMap = new Map();
var keyString = 'a string';
myMap.set(keyString, '和键a string关联的值');
/* console.log(myMap.get(keyString)); //和键a string关联的值
console.log(myMap.get('a string')); //和键a string关联的值 */

var keyNumber = 1;
myMap.set(keyNumber, '和键keyNumber关联的值');
/* console.log(myMap.get(keyNumber));
console.log(myMap.get(1)); */

var keyObj = {};
myMap.set(keyObj, '和键keyObj关联的值');
/* console.log(myMap.get(keyObj));
console.log(myMap.get({})); //undefined keyObj !== {} */

var keyFunction = function () {};
myMap.set(keyFunction, '和键keyFunction关联的值');
/* console.log(myMap.get(keyFunction));
console.log(myMap.get(function () {})); //undefined */

var keyArr = [];
myMap.set(keyArr, '和键keyArr关联的值');
/* console.log(myMap.get(keyArr));
console.log(myMap.get([])); //undefined */

myMap.set(NaN, 'not a number');
// console.log(myMap.get(NaN));

// 2.Map的迭代
/* for (var [key, value] of myMap) {
  console.log(key, value);
}
for (var [key, value] of myMap.entries()) {
  console.log(key, value);
}
for (var key of myMap.keys()) {
  console.log(key);
}
for (var value of myMap.values()) {
  console.log(value);
}
myMap.forEach(function (value, key) {
  console.log(key, value);
}, myMap); */

// 3.Map对象的操作

// map的克隆
/* var myMap3 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
var myMap4 = new Map(myMap3);

var original = myMap3.original;
var clone = myMap4.clone;

console.log(original === clone); //true */

// 2.Set对象:0、undefined、NaN都不会重复
let mySet = new Set();
mySet.add(0);
mySet.add(NaN);
mySet.add({ a: 1, b: 2 });
console.log(mySet);
