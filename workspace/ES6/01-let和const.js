/* for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    // 输出10个10
    console.log(i);
  });
}
// 1.let 搭配for(块级作用域)
for (let j = 0; j < 10; j++) {
  setTimeout(function () {
    // 输出0-9
    console.log(j);
  });
} */

// 2.let定义不会变量提升
/* console.log(a);
let a = 10; //ReferenceError: Cannot access 'a' before initialization
console.log(b);
var b = 20; //undefined */

// 3.const声明只读变量，不能修改
/* const a = 10;
a = 20; //TypeError: Assignment to constant variable.赋值给常量变量。 */

// 4.let/const都是块级作用域
/* var a = 1;
if (true) {
  console.log(a);
  const a = 2; //ReferenceError: Cannot access 'a' before initialization 在初始化之前无法访问` a `
}
 */

// 5.const只保证变量的值不变，当变量为引用类型时，变量值为保存地址的值(指向数据的指针)，内容可以改变。

const arr = [1, 2, 3];
console.log(arr); //[1, 2, 3]
arr.push(4);
console.log(arr); //[1, 2, 3, 4]
