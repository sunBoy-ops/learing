// https://www.yuque.com/chengxuyuanyideng/xn147o/pg2b55
// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它也是JavaScript语言的第七种数据类型
/* let s = Symbol();
console.log(typeof s); //Symbol */

// 1.symbol可以接收字符串作为参数
/* let s1 = Symbol('apply');
let s2 = Symbol('banana');
console.log(s1); //Symbol(apply)
console.log(s2); //Symbol(banana)
console.log(s1 == s2); //false
 */

// 2.可以显式转化为字符串和布尔值
/* let s1 = Symbol('apply');
let s2 = Symbol('banana');
let s3 = Symbol();
console.log(String(s1)); //Symbol(apply)
console.log(Boolean(s2)); //true
console.log(Boolean(s3)); //true */

// 3.可以作为对象的属性名
let a = {};
let mySymbol = Symbol();
/* a[mySymbol] = 'hello';
console.log(a); //{ [Symbol()]: 'hello' } */
let a2 = { [mySymbol]: 'hellow' };
console.log(a2); //{ [Symbol()]: 'hellow' }
let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hellowd' });
console.log(a3[mySymbol]);
