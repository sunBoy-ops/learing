// 1.参数可以添加默认值
/* function sum(x, y = 2) {
  console.log(x + y);
}
sum(1); //3
sum(1, 1); */
// 默认值只有参数为undefined时，才使用默认值
/* function sum(x, y = 2) {
  console.log(x + y);
}
sum(1, null); //1
 */
// 存在暂时性死区
/* function sum(x, y = x) {
  console.log(x + y);
}
sum(1); //2 */

// 2.箭头函数
// 参数 => 函数体
// 参数只有一个，函数体返回值只有一行
/* var f = (a) => a + 1;
console.log(f(1)); //2 */
// 箭头函数this指向
/* var Person = {
  a: 18,
  sayHello: function () {
    setTimeout(() => {
      console.log(this.a);
    });
  },
};
var a = 20;
Person.sayHello(); //20 */
var Person = {
  a: 18,
  sayHello: function () {
    setTimeout(() => {
      console.log(this.a);
    });
  },
};
var a = 20;
Person.sayHello(); //18
