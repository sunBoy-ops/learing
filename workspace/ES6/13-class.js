/* class Person {
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
console.log(p.sayName === p2.sayName); //存放在原型对象中的同一个方法 */

// 2.继承
/* class Animal {
  static animalAttr = 'Animal静态属性';
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  // 实例方法
  sayName() {
    console.log('实例方法');
  }
  // 静态方法
  static animalMethod() {
    console.log('Animal静态方法');
  }
}
class Dog extends Animal {
  constructor(name, age, weight, color) {
    super(name, age, weight);
    this.color = color;
    console.log('Dog的构造器');
  }
}
let dog = new Dog('xiaohuang', 2, '10kg', 'yellow');
// 继承子类的原型对象继承父类的原型对象
dog.sayName();
// 继承 子类的对象通过_proto_指针指向父类的对象
Dog.animalMethod();
console.log(Dog.animalAttr);
console.log(Dog.__proto__ === Animal);
console.log(Dog.prototype.__proto__ === Animal.prototype);
 */

// 3. get set
/* class Dog {
  constructor(a) {
    this.a = a;
  }
  get a() {
    return this.a;
  }
  set a(a) {
    this.a = a;
  }
}
let dog = new Dog(1); //报错 RangeError: Maximum call stack size exceeded */
class Dog {
  constructor(a) {
    this.a = a;
  }
  get a() {
    return this._a;
  }
  set a(a) {
    this._a = a;
  }
}
let dog = new Dog(1);
console.log(dog.a);
