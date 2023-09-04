// 1.对象字面量
// 属性的简洁表示法：ES6允许对象的属性直接写变量，这是对象的属性名是变量名，属性值是变量值
/* const age = 12;
const name = 'Tom';
const obj = { age, name };
console.log(obj); //{ age: 12, name: 'Tom' } */
// 等同于const person = {age: age, name: name}
// 方法名的简写
/* const person = {
  sayHi() {
    console.log('Hi');
  },
};
person.sayHi(); */
//等同于
/* const person = {
  sayHi:function(){
    console.log("Hi");
  }
}
person.sayHi();//"Hi" */

// 2.对象的拓展运算符
/* let person = { name: 'Any', age: 15 };
let someone = { ...person };
console.log(someone); //{ name: 'Any', age: 15 } */

// 3.对象的新方法
// 3.1 Object.assign(target,source_1,...) 用于将源对象的所有可枚举属性复制到目标对象中。
//● 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。
//● 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。
/* let target = { a: 1 };
let object2 = { b: 2 };
let object3 = { c: 3 };
Object.assign(target, object2, object3);
console.log(target); //{ a: 1, b: 2, c: 3 } */

// console.log(typeof Object.assign(3)); //object

// 复制为浅拷贝
/* let targetObj = { c: 3 };
let sourceObj = { a: { b: 1 } };
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
console.log(sourceObj); //{ a: { b: 2 } } */

// 数组的处理
Object.assign([2, 3], [5]); // [5,3]
Object.assign([2, 3], [5, 8]); // [5,8]
// 会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3}

// 3.2 Object.is(value1,value2)
console.log(Object.is('q', 'q')); //true
console.log(Object.is(1, 1)); //true
console.log(Object.is([1], [1])); //true
console.log(Object.is({ q: 1 }, { q: 1 })); //true

// 与===的区别
// 1.-0和+0
console.log(Object.is(-0, +0)); //false
console.log(-0 === +0); //true
// 2.NaN和NaN
console.log(Object.is(NaN, NaN)); //true
console.log(NaN === NaN); //false
