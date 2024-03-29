## ES6

### 1.面向对象编程介绍

#### 1.1两大编程思想

- 面向过程
- 面向对象



#### 1.2 面向过程编程POP(process-oriented programming)

​	**面向过程**就是分析出解决问题所需要的步骤，然后用函数将这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。

​	举个栗子：将大象装进冰箱，面向过程做法

![1677634871946](G:\web\xu\资料\JSAdvance\assets\%5CUsers%5C17414%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1677634871946.png)

**面向过程，就是按照分析好的步骤，按照步骤解决问题。**



#### 1.3 面向对象编程OOP(Object Oriented Programming)

​	**面向对象**是把事务分解成为一个个对象，然后由对象之间分工与合作

​	举个栗子：将大象装进冰箱，面向对象做法。

​	想找出对象，并写出这些对象的功能：

1. 大象对象

   - 进去

2. 冰箱对象

   - 打开
   - 关闭

3. 使用大象和冰箱的功能

   **面向对象是以对象功能来划分问题，而不是步骤。**

   在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。

   面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

   面向对象的特征：

   - 封装性
   - 继承性
   - 多态性

#### 1.4 面向过程和面向对象的对比

**面向过程**

- 优点∶性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。
- 缺点∶没有面向对象易维护、易复用、易扩展

**面向对象**

- 优点∶性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。
- 缺点∶没有面向对象易维护、易复用、易扩展

### 2.ES6 中的类和对象

**面对对象**

面向对象更贴近我们的实际生活,可以使用面向对象描述现实世界事物.但是事物分为具体的事物和抽象的事物手机―抽象的(泛指的)

面向对象的思维特点:

1．抽取（抽象）对象共用的属性和行为组织(封装)成一个类(模板)

2．对类进行实例化,获取类的对象

面向对象编程我们考虑的是有哪些对象，按照面向对象的思维特点不断的创建对象,使用对象,指挥对象做事情.

#### 2.1 对象

现实生活中︰万物皆对象，对象是**一个具体的事物**，看得见摸得着的实物。例如，一本书、一辆汽车、一个人可以是“对象”，一个数据库、一张网页、一个与远程服务器的连接也可以是“对象”。

**在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，**例如字符串、数值、数组、函数等。

对象是由**属性**和**方法**组成的︰

- 属性：事物的特征，在对象中用属性来表示(常用名词)
- 方法：事物的行为，在对象中用方法来表示(常用动词)

#### 2.2 类 class

在ES6中新增加了类的概念，可以使用**class**关键字声明一个类，之后以这个类来实例化对象。

**类**抽象了对象的公共部分，它**泛指**某一大类( class )

**对象**特指某一个，通过类实例化一个具体的对象

![1677635841418](G:\web\xu\资料\JSAdvance\assets\%5CUsers%5C17414%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1677635841418.png)

面向对象的思维特点：

1. 抽象对象公共的属性和行为组织成一个**类**
2. 对类进行实例化，获取类的**对象**

#### 2.3 创建类

语法：

```javascript
class name {
    //class body
}
```

创建实例：

```javascript
var xx = new name();
```

**注意：类必须使用new 实例化对象**

#### 2.4 类 constructor 构造函数

​	**constructor()**方式发是类的构造函数(默认方法),**用于传递参数，返回对象**，通过new命令生成对象实例，自动调用该方法。如果没有显示定义，类内部会自动给我们创建一个**constructor()**

```javascript
      // 1. 创建一个类class 创建一个 明星类
      class Star {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }

      // 2.利用类 创建对象 new
      var htt = new Star('胡图图', 5);
      console.log(htt);
      //(1）通过class 关键字创建类，类名我们还是习惯性定义首字母大写
      //(2）类里面有个constructor函数,可以接受传递过来的参数,同时返回实例对象
      //(3) constructor函数只要new生成实例时,就会自动调用这个函数，如果我们不写这个函数,类也会自动生成这个函数
      //(4)生成实例new不能省略
      //(5）最后注意语法规范，创建类类名后面不要加小括号,生成实例类名后面加小括号，构造函数不需要加function
```

#### 2.5 类的方法

```javascript
// 1. 创建一个类class 创建一个 明星类
      class Star {
        // 类的共有属性放到 constructor 里面
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        string(song) {
          console.log(this.name + song);
        }
      }

      // 2.利用类 创建对象 new
      var htt = new Star('胡图图', 5);
      //1.在类中添加方法不用添加function
      // 2.类中函数之间不用添加逗号隔开方法
      ldf.string('年少有为'); //胡图图年少有为
```



#### 3.1 继承

现实中的继承：子承父业，比如我们都继承父亲的姓

程序中的继承：子类可以继承父类的一些属性和方法。

语法：

```JavaScript
class Father {} //父类
class Son extends Fathrer {} //子类继承父类
```

#### 3.2 super 关键字

**super 关键字** 用于访问和调用对象父类中的函数。**可以调用父类的构造函数**，也可以调用父类的普通函数

```javascript
class Father {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        sum() {
          console.log(this.x + this.y);
        }
      }
      class Son extends Father {
        constructor(x, y) {
          //super 关键字 可以调用父类的构造函数和普通函数
          super(x, y);
        }
      }
```

```JavaScript
class Father {
        say() {
          return '我是爸爸';
        }
      }
      class Son extends Father {
        say() {
            //super 继承父类的普通函数
          console.log(super.say() + '的儿子');
        }
      }
      var son = new Son();
      son.say();
      // 继承中的属性或者方法查找原则:就近原则
      // 1．继承中,如果实例化子类输出一个方法,先看子类有没有这个方法,如果有就先执行子类的
      //2．继承中,如果子类里面没有,就去查找父类有没有这个方法,如果有,就执行父类的这个方法(就近原则)构造函数和原型
```



### 3.构造函数和原型



#### 1.构造函数和原型

##### 1.1 概述

在典型的OOP的语言中(如Java )，都存在类的概念，类就是对象的模板，对象就是类的实例，但在ES6之前，JS中并没用引入类的概念。

ES6，全称ECMAScript 6.0，2015.06发版。但是目前浏览器的JavaScript是ES5版本，大多数高版本的浏览器也支持ES6，不过只实现了ES6的部分特性和功能。

在ES6之前，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征。



创建对象可以通过以下三种方式：

1. 对象字面量
2. new Object()
3. 自定义构造函数

##### 1.2 构造函数

JavaScript的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的this上添加。通过这两种方式添加的成员，就分别称为**静态成员**和**实例成员**。

- 静态成员︰在构造函数本上添加的成员称为**静态成员**，**只能由构造函数本身来访问**
- 实例成员:在构造函数内部创建的对象成员称为**实例成员**，**只能由实例化的对象来访问**

##### 1.3 构造函数的问题

构造函数方法很好用，但是 **存在浪费内存的问题**

```JavaScript
function Star(uname, age){
	this.uname = uname;this.age = age;
    this.sing = function(){
        console.log("我会唱歌");
    }
}
var ldh = new Star('刘德华",18);
var zxy = new Star('张学友",19);
```

##### ![1678413083497](G:\web\xu\资料\JSAdvance\assets\%5CUsers%5C17414%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1678413083497.png)1.4 构造函数原型 prototype

构造函数通过原型分配的函数是所有对象所**共享的**。

JavaScript规定，**每一个构造函数都有一个prototype属性**，指向另一个对象。注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

**我们可以把那些不变的方法，直接定义在prototype对象上，这样所有对象的实例就河以共享这些方法。**

##### 1.5 对象原型_proto__

##### 1.6 构造函数constructor

##### 1.7 构造函数、实例、原型对象三者之间的关系

![1678413952027](G:\web\xu\资料\JSAdvance\assets\%5CUsers%5C17414%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1678413952027.png)

##### 1.8 原型链

![1678414232727](G:\web\xu\资料\JSAdvance\assets\%5CUsers%5C17414%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1678414232727.png)

##### 1.9 JavaScript的成员查找机制(规则)

- 当访问一个对象的属性(包括方法)时，首先查找这个**对象自身**有没有该属性。
- 如果没有就查找它的原型（也就是_proto_指向的**prototype原型对象**）。
- 如果还没有就查找原型对象的原型( **Object的原型对象**)。
- 依此类推一直找到Object为止( **null** )。
- _proto_对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。

##### 1.10 原型对象中this

构造函数和原型对象的this都指向 实例对象

##### 1.11 扩展内置对象

可以通过原型对象，对原来的内置对象进行扩展自定义的方法。比如给数组增加自定义求偶数和的功能。

**注意∶数组和字符串内置对象不能给原型对象覆盖操作Array.prototype ={}，只能是Array.prototype.xx = function的方式.**

#### 2.继承

ES6之前并没有给我们提供extends继承。我们可以通过**构造函数+原型对象**模拟实现继承，被称为**组合继承**

##### 2.1 call()

调用这个函数,并且修改函数运行时的this指向

```javascript
fun.call(thisArg, arg1, arg2, ...)
```

- thisArg :当前调用函数this的指向对象
- arg1 , arg2:传递的其他参数

##### 2.2 借用构造函数继承父类型属性

核心原理︰通过call把父类型的this 指向子类型的this，这样就可以实现子类型继承父类型的属性。

##### 2.3 借用原型对象继承父类型方法

```javascript
<script>
      function Father(uname, age) {
        this.uname = uname;
        this.age = age;
      }
      Father.prototype.money = function () {
        console.log('父亲会挣钱');
      };
      function Son(uname, age) {
        // 通过call 将父构造函数中的this 指向子构造函数
        Father.call(Son, uname, age);
      }
      // 将子构造函数 指向父构造函数的实例对象
      Son.prototype = new Father();
      // 改变构造函数原型指向改变了，还要修改constructor指向
      Son.prototype.constructor = Son;
      Son.prototype.exam = function () {
        console.log('孩子要考试');
      };
      var son = new Son('htt', 3);
      console.log(son);
      console.log(Son.prototype.constructor);
      son.exam();
      son.money();
    </script>
```



#### 3.类

1. class本质还是function.
2. 类的所有方法都定义在类的prototype属性上
3. 类创建的实例,里面也有_proto_指向类的prototype原型对象
4. 所以ES6的类它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
5. 所以ES6的类其实就是语法糖.
6. 语法糖:语法糖就是一种便捷写法．简单理解,有两种方法可以实现同样的功能,但是一种写法更加清晰、方便,那么这个方法就是语法糖

### 4.ES5中的新增方法

#### 4.1 ES5 新增方法概述

ES5 中给我们新增了一些方法，可以很方便的操作数组或者字符串，这些方法主要包括：

- 数组方法
- 字符串方法
- 对象方法

#### 4.2 数组方法

迭代(遍历)方法：forEach()、map()、filter()、some()、every();

`array.forEach( function (currentvalue,index,arr))`

- currentValue:数组当前项的值
- index:数组当前项的索引
- arr:数组对象本身

`array.map( function (currentvalue,index,arr),thisArg)`

- `map` 方法会给原数组中的每个元素都按顺序调用一次 `callbackFn` 函数。`callbackFn` 每次执行后的返回值（包括 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)）组合起来形成一个新数组。
- `callbackFn` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。
- currentValue:数组当前项的值
- index:数组当前项的索引
- arr:数组对象本身

`array.filter (function (currentvalue,index,arr))`

- filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素,主要用于**筛选数组**
- **注意它直接返回一个新数组**
- currentValue:数组当前项的值
- index:数组当前项的索引
- arr:数组对象本身

`array.some (function ( currentvalue,index,arr))`

- some()方法用于检测数组中的元素**是否满足指定条件**.通俗点查找数组中是否有满足条件的元素
- 注意它返回值是**布尔值**,如果**查找到这个元素**,就返回**true**，如果查找不到就返回**false**.
- 如果找到第一个满足条件的元素,则终止循环不在继续查找.
- currentValue:数组当前项的值
- index:数组当前项的索引
- arr:数组对象本身

`array.every (function ( currentvalue,index,arr))`

- **every()** 方法测试一个数组内的**所有元素**是否都能通过某个指定函数的测试。它返回一个布尔值。
- 注意它返回值是**布尔值**,如果**所有元素满足条件**,就返回**true**，如果有任何一个不满足就返回**false**.
- 如果找到第一个不满足条件的元素,则终止循环不在继续查找.
- currentValue:数组当前项的值
- index:数组当前项的索引
- arr:数组对象本身

#### 4.3 字符串方法

trim() 方法会从一个字符串的两端删除空白字符

`str.trim()`

trim() 方法并不影响原字符串本身，它返回的是一个新的字符串

#### 4.4 对象方法

1. Object.keys() 用于获取对象自身所有的属性

`Object.keys(obj)`

- 效果类似for...in
- 返回一个由属性名组成的数组

2.Object.defineProperty()定义对象中新属性或修改原有的属性。

`object.defineProperty(obj,prop,descriptor)`

- obj :必需。目标对象
- prop∶必需。需定义或修改的属性的名字
- descriptor:必需。目标属性所拥有的特性

Object.defineProperty0第三个参数descriptor说明:以对象形式{}书写

- value:设置属性的值默认为undefined
- writable:值是否可以重写。, true | false 默认为false
- enumerable:目标属性是否可以被枚举。true | false默认为false
- configurable:目标属性是否可以被删除或是否可以再次修改特性true | false 默认为false

### 5.函数

#### 1.函数的定义和调用

##### 1.1函数的定义方式

1.函数声明方式function关键字(命名函数)

2.函数表达式(匿名函数)

3.new Function()

var fn = new Function ('参数1','参数2·...，"函数体')

- Function里面参数都必须是字符串格式
- 第三种方式执行效率低，也不方便书写，因此较少使用
- 所有函数都是Function的实例(对象)
- 函数也属于对象

![1678447585060](G:\web\xu\资料\JSAdvance\assets\%5CUsers%5C17414%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1678447585060.png)

##### 1.2 函数的调用

1.普通函数

2.对象的方法

3.构造函数

4.绑定事件函数

5.定时器函数

6.立即执行函数

#### 2.this

##### 2.1 函数内this的指向

这些this的指向，是当我们调用函数的时候确定的。调用方式的不同决定了this的指向不同

一般指向我们的调用者.

| 调用方式     | this指向                                 |
| ------------ | ---------------------------------------- |
| 普通函数调用 | window                                   |
| 构造函数调用 | 实例对象原型对象里面的方法也指向实例对象 |
| 对象方法调用 | 该方法所属对象                           |
| 事件绑定方法 | 绑定事件对象                             |
| 定时器函数   | window                                   |
| 立即执行函数 | window                                   |

##### 2.2 改变函数内部this指向

JavaScript 为我们专门提供了一些函数方法来帮我们更优雅的处理函数内部 this的指向问题，常用的有bind().call()、apply()三种方法。

###### 1.call方法

call())方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的this指向。

`fun.call (thisArg, arg1,arg2, ...)`

###### 2.apply方法

apply()方法**调用**一个函数。简单理解为调用函数的方式，但是它可以改变函数的this指向。

`fun. apply(thisArg,[argsArray])`

- thisArg :在fun函数运行时指定的 this值
- argsArray:传递的值，必须包含在数组里面
- 返回值就是函数的返回值，因为它就是调用函数

例：调用数学中的最小值和最大值方法

###### 3.bind方法

bind()方法不会调用函数。但是能改变函数内部this指向

`fun. bind (thisArg,arg1, arg2 , ...)`

- thisArg :在fun函数运行时指定的this值
- arg 1 , arg2:传递的其他参数
- 返回由指定的this值和初始化参数改造的原函数拷贝

##### 2.3 call apply bind总结

相同点:

都可以改变函数内部的this指向.

区别点:

1. call和 apply 会调用函数,并且改变函数内部this指向.

2. call和apply传递的参数不一样, call传递参数aru1, aru2..形式 apply必须数组形式[arg]
3.  bind 不会调用函数,可以改变函数内部this指向.

**主要应用场景:**

1. call经常做继承.

2. apply经常跟数组有关系.比如借助于数学对象实现数组最大值最小值
3.  bind 不调用函数但是还想改变this指向.比如改变定时器内部的this指向.

#### 3.严格模式

##### 3.1 什么是严格模式

JavaScript除了提供正常模式外，还提供了严格模式( strict mode )。ES5的严格模式是采用具有限制性JavaScript变体的一种方式，即在严格的条件下运行JS代码。

严格模式在IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。

严格模式对正常的JavaScript语义做了一些更改:

1．消除了Javascript语法的一些不合理、不严谨之处，减少了一些怪异行为。

2．消除代码运行的一些不安全之处，保证代码运行的安全。

3．提高编译器效率，增加运行速度。

4．禁用了在ECMAScript的未来版本中可能会定义的一些语法，为未来新版本的Javascript做好铺垫。比如一些保留字如: class, enum, export, extends, import, super 不能做变量名

##### 3.2 开启严格模式

严格模式可以应用到**整个脚本**或**个别函数**中。因此在使用时，我们可以将严格模式分为为**脚本开启严格模式**和**为函数开启严格模式**两种情况。

###### 1.为脚本开启严格模式

为整个脚本文件开启严格模式，需要在**所有语句之前放一个特定语句“use strict”; (或‘use strict' ;)。**

```JavaScript
<script>
    "use strict";
	console.log("这是严格模式。");
</ script>

<script>
    (function （）{
     "use strict";
     var num = 10;
     function fn() { }) () ;
</ script>
```

因为"use strict"加了引号，所以老版本的浏览器会把它当作一行普通字符串而忽略。

###### 2.为函数开启严格模式

要给某个函数开启严格模式，需要把**“use strict”;(或'use strict';)声明放在函数体所有语句之前。**

##### 3.3 严格模式的变化

严格模式对Javascript的语法和行为，都做了一些改变。

###### 1.变量规定

1. 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var命令声明，然后再使田心
2. 严禁删除已经声明变量。例如，deletex;语法是错误的。

###### 2.严格模式下this指向问题

1. 以前在全局作用域函数中的this指向window对象。
2. **严格模式下全局作用域中函数中的this是undefined。**
3. 以前构造函数时不加new也可以调用,当普通函数，this指向全局对象
4. 严格模式下,如果构造函数不加new调用, this会报错.
5. new实例化的构造函数指向创建的对象实例。
6. 定时器this还是指向window 。
7. 事件、对象还是指向调用者。

###### 3.函数的变化

1. 函数不能有重名的参数。
2. 函数必须声明在顶层.新版本的 JavaScript 会引入“块级作用域”（ES6中已引入)。为了与新版本接轨，不允许在非函数的代码块内声明函数。

#### 4.高阶函数

**高阶函数**是对其他函数进行操作的函数，它**接收函数作为参数**或**将函数作为返回值输出**。

```JavaScript
<script>
    function fn(callback) {
    callback&&callback () ;
}
fn (function ( ) {alert ( 'hi' )}）
</script>
    
<script>
    function fn () {
    return function () {}
    fn( ) ;
</script>
```

此时fn 就是一个高阶函数

函数也是一种数据类型，同样可以作为参数，传递给合另外一个参数使用。最典型的就是作为回调函数。

#### 5.闭包

##### 5.1 变量作用域

变量根据作用域的不同分为两种:全局变量和局部变量。

1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

##### 5.2 什么是闭包

**闭包( closure)** 指有权**访问**另一个函数作用域中**变量**的**函数**。----- JavaScript高级程序设计

简单理解就是，一个作用域可以访问另外一个函数内部的局部变量。

##### 5.3 闭包案例

1. 循环注册点击事件
2. 循环中setTimeout
3. 计算打车价格

##### 5.4 闭包总结

**1.闭包是什么?**

闭包是一个函数（一个作用域可以访问另外一个函数的局部变量)

**2.闭包的作用是什么?**

延伸变量的作用范围

#### 6.递归

##### 6.1 什么是递归？

如果**一个函数在内部可以调用其本身**，那么这个函数就是**递归函数**。

简单理解:函数内部自己调用自己,这个函数就是递归函数

递归函数的作用和循环效果一样

由于递归很容易发生“栈溢出”错误( stack overflow )，所以**必须要加退出条件return。**

##### 6.2 浅拷贝和深拷贝

1．浅拷贝只是拷贝一层,更深层次对象级别的只拷贝引用.

2．深拷贝拷贝多层,每一级别的数据都会拷贝.

3.Object.assign(target,...sources) es6新增方法可以浅拷贝



### 6.正则表达式

#### 1.正则表达式概述

##### 1.1 什么是正则表达式

**正则表达式（Regular Expression )**是用于匹配字符串中字符组合的模式。在JavaScript中，正则表达式也是对象。

正则表通常被用来检索、替换那些符合某个模式（规则)的文本，例如验证表单∶用户名表单只能输入英文字母、数字或者下划线，昵称输入框中可以输入中文(**匹配**)。此外，正则表达式还常用于过滤掉页面内容中的一些敏感词(**替换)**，或从字符串中获取我们想要的特定部分(**提取**)等。

其他语言也会使用正则表达式，本阶段我们主要是利用JavaScript正则表达式完成表单验证。

##### 1.2 正则表达式的特点

1.灵活性、逻辑性和功能性非常的强。

2.可以迅速地用极简单的方式达到字符串的复杂控制。

3.对于刚接触的人来说，比较晦涩难懂。比如:^\w+([-+.]w+)*@w+([-.]w+)*1.lw+([-.]w+)*$

4.实际开发,一般都是直接复制写好的正则表达式.但是要求会使用正则表达式并且根据实际情况修改正则表达式.比如用户名: /^[a-zO-9_-][3,16}$/

#### 2.正则表达式在JavaScript中的使用

##### 2.1 创建正则表达式

在JavaScript中，可以通过两种方式创建一个正则表达式

1.通过调用RegExp对象的构造函数创建

`var 变量名=new RegExp(/表达式/)`

2.通过字面量创建

`var 变量名=/表达式/`

//注释中间放表达式就是正则字面量

##### 2.2 测试正则表达式

test()正则对象方法，用于检测字符串是否符合该规则，该对象会返回true或false，其参数是测试字符串。

`regexpbj.test (str)`

1. regexpobj是写的正则表达式
2. str 我们要测试的文本
3. 就是检测str文本是否符合我们写的正则表达式规范.

#### 3.正则表达式中的特殊字符

##### 3.1正则表达式的组成

一个正则表达式**可以由简单的字符构成**，比如/abc/，**也可以是简单和特殊字符的组合**，比如/ab*c/。其中特殊字符也被称为**元字符**，在正则表达式中是具有**特殊**意义的**专用符号**，如^、$、＋等。

特殊字符非常多，可以参考:

- MDN : https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
-  jQuery手册︰正则表达式部分
- 正则测试工具: http://tool.oschina.net/regex

##### 3.2边界符

正则表达式中的边界符(位置符）用来**提示字符所处的位置**，主要有两个字符。

| 边界符 | 说明                         |
| ------ | ---------------------------- |
| ^      | 表示匹配行首的文本(以谁开始) |
| $      | 表示匹配行尾的文本(以谁结束) |

如果^和$在一起，表示必须是精确匹配。

##### 3.3字符类

字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。**所有可供选择的字符都放在方括号内**。

1.[] 需要为括号内的字符

2.[-]方括号内部范围符- （如果中括号里有^表示取反，就是不能为括号中的）

##### 3.4量词符

量词符用来**设定某个模式出现的次数**。

| 量词  | 说明             |
| ----- | ---------------- |
| *     | 重复零次或更多次 |
| +     | 重复一次或更多次 |
| ?     | 重复零次或一次   |
| {n}   | 重复n次          |
| {n,}  | 重复n次或更多次  |
| {n,m} | 重复n到m次       |

##### 3.5括号总结

1.大括号量词符．里面表示重复次数

2.中括号字符集合。匹配方括号中的任意字符.

3.小括号表示优先级

可以在线测试: https://c.runoob.com/

##### 3.6预定义类

预定义类指的是某些**常见模式的简写方式**。

| 预定类 | 说明                                                        |
| ------ | ----------------------------------------------------------- |
| \d     | 匹配0-9之间的任一数字，相当于[0-9]                          |
| \D     | 配所有0-9以外的字符，相当于`[^0-9]`                         |
| \w     | 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]            |
| \W     | 除所有字母、数字和下划线以外的字符，相当于`[^A-Za-z0-9_]`   |
| \s     | 匹配空格(包括换行符、制表符、空格符等)，相等于[ \t\r\n\v\f] |
| \S     | 匹配非空格的字符，相当于`[^\t\r\n\v\f]`                     |

#### 4.正则表达式中的替换

##### 4.1 replace替换

replace()方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或是一个正则表达式。

`stringObject.replace(regexp/substr,replacement)`

1.第一个参数:被替换的字符串或者正则表达式

2.第二个参数:替换为的字符串

3.返回值是一个替换完毕的新字符串

##### 4.2正则表达式参数

`/表达式/[switch]`

switch(也称为修饰符)按照什么样的模式来匹配.有三种值:

- g∶全局匹配
- i :忽略大小写
- gi :全局匹配＋忽略大小写