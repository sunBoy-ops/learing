// 1.子串的识别：判断字符串是否包含子串，includes()/startsWith()/endsWith(),以上三个方法都可以接收两个参数，需要搜索的字符串，和可选的搜索起始位置索引
/* let string = 'apple,banana,orange';
// includes():返回布尔值，判断是否找到参数字符串
console.log(string.includes('banana')); //true
// startsWith():返回布尔值，判断参数字符串是否再原字符串的头部
console.log(string.startsWith('apple')); //true
// endsWith():返回布尔值，判断参数字符串是否在原字符串的尾部
console.log(string.endsWith('orange')); //true
// 从索引为6的头部搜索参数字符串
console.log(string.startsWith('banana', 6)); //true
// indexOf(lastIndexOf)可以得到参数字符串的索引位置
console.log(string.indexOf('banana')); //6 */

// 2.字符串重复:repeat()返回新字符串，表示将字符串重复指定次数返回
console.log('hello,'.repeat(2)); //'hello,hello,'

// 3.字符串补全：padStart/padEnd,表示用参数字符串补全原字符串
// 第一次参数是添加的长度（最少为1），第二个参数是补全的字符串
// padStart从头部补全原字符串()
console.log('h'.padStart(5, 'o')); //oooooh
console.log('h'.padEnd(5, 'o')); //hooooo
console.log('h'.padStart(5)); //     h
console.log('h'.padStart('o')); //h

// 4.模板字符串
// 模板字符串相当于加强版的字符串，用反引号 `,除了作为普通字符串，变量名写在${}中，${}中也可以放入JavaScript表达式
let name = 'Mike';
let age = 27;
let info = `My Name is ${name},I am ${age + 1} years old next year.`;
console.log(info);
