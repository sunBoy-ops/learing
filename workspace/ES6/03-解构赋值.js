// https://www.yuque.com/chengxuyuanyideng/xn147o/zeikqk
// 1.数组解构赋值:ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
// 1.1允许嵌套的
/* var [a,b,[c1,c2]]=[1,2,[3,4]]
console.log(a); //1
console.log(b); //2
console.log(c1);//3
console.log(c2);//4 */
// 1.2 不完全解构
/* let [a, b, c] = [1, 2];
console.log(a); //1
console.log(b); //2
console.log(c); //undefined
 */
// 1.3 允许解构变量添加默认值
/* let [a, b, c = 100] = [1, 2];
console.log(a); //1
console.log(b); //2
console.log(c); //100 */
// 1.4 当解构变量有默认值也有解构值，解构值优先
/* let [a, b, c = 100] = [1, 2, 3];
console.log(a); //1
console.log(b); //2
console.log(c); //3 */

// 2.对象的解构赋值：对象的解构赋值，变量名会与对象的属性名进行匹配
/* let { a, b, c } = { a: 1, b: 2, c: 3 };
console.log(a); //1
console.log(b);//2
console.log(c);//3 */
/* let { a, b, c } = { a: 1, c: 3, b: 2 }; //变量只会和对象属性名进行匹配
console.log(a); //1
console.log(b); //2
console.log(c); //3 */
/* let { a } = { b: 2 }; //变量未匹配成功未undefined
console.log(a); //undefined
*/
/* let { b: a } = { b: 2 }; //即使变量名不匹配也能完成赋值
console.log(a); //2 */
// 2.1 对象的解构赋值的嵌套
/* let {
  a: { b },
} = { a: { b: 2 } };
console.log(b); //2
console.log(a); //ReferenceError: a is not defined */
/* // 2.2 可以指定默认值
let { a, b = 2 } = { a: 1 };
console.log(b);//2 */
// 2.3 复杂的对象解构赋值
/* let {
  code,
  data: {
    userName,
    goodList: { price, id },
  },
} = { code: 10000, data: { userName: '张三', goodList: { price: 200, id: 100 } } };
console.log(code, userName, price, id); //10000 张三 200 100
console.log(data); //ReferenceError: data is not defined
console.log(goodList); //ReferenceError: goodList is not defined */

// 3.字符串的解构赋值
/* let [a, b, c, d, e, f] = '我就是前端君';
console.log(a); //我
console.log(b); //就
console.log(c); //是
console.log(d); //前
console.log(e); //端
console.log(f); //君 */
