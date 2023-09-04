// proxy可以对目标对象的读取、函数调用进行拦截，然后进行代理，是通过对象的代理对象进行操作
let target = {
  name: 'Tom',
  age: 18,
};
let handler = {
  get: function (target, key) {
    console.log('getter:' + key);
    return target[key];
  },
  set: function (target, key, value) {
    console.log('setter:' + key);
    target[key] = value;
  },
};
let proxy = new Proxy(target, handler);
let proxyName = proxy.name; //getter:name
console.log(proxyName); //Tom
proxy.set = 22; //setter:age
// 通过构造函数新建实例其实是目标对象进行了浅拷贝，因此目标对象与代理对象会相互影响
console.log(target, proxy);
