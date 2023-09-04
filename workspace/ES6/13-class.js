class Person {
  // 构造器 默认有一个，可以显式提供
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 实例私有属性
  test = ['hello'];
  // 实例的方法，原型对象的方法
  sayName() {
    console.log(this.name);
  }
  // 静态方法
  static sayType(p) {
    return p instanceof Person;
  }
  // 静态属性
  static gende = '男';
}
let p = new Person('zhangsan', 18);
let p2 = new Person({});
p.test.push('tom');
console.log(p, p2); //维护的是私有属性 创建的是不同子类构造函数对象 Person { test: [ 'hello', 'tom' ], name: 'zhangsan', age: 18 } Person { test: [ 'hello' ], name: {}, age: undefined }
console.log(Person.sayType(p)); //静态方法由类去调用
// console.log(p.sayType(p)); //TypeError: p.sayType is not a function
console.log(p.test === p2.test); //私有属性不相同
console.log(p.sayName === p2.sayName); //存放在原型对象中的同一个方法
