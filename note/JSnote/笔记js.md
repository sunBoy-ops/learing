### BOM(browser  object model)

​	特点：考虑兼容性

##### 1、定义：专门用于操作浏览器窗口相关的API

​		之前学的 alert("xxx") prompt("") 都是在全局的window下的方法

​		window.xxx 可以直接省略window.

##### 2、获取常见浏览器的信息

​		浏览器窗口的高度：window.innerWidth

​		浏览器窗口的高度：window.innerHeight

​		或者是  document.documentElement.clienWidth  宽度(考虑兼容)

​			      document.documentElement.clientHeight  高度

```js
//兼容写法
//console.log(window.innerWidth||document.documentElement.clientWidth);

// 监听 window宽度实时变化     resize :监听浏览器变化的事件方法
window.onresize=function () {
    console.log(window.innerWidth||document.documentElement.clientWidth);
    if((window.innerWidth||document.documentElement.clientWidth)<500){
        alert("那啥 你太小了");
    }
}
```

##### 		滚动条距离页面顶部的高度(考虑兼容)

​		document.documentElement.scrollTop ||  window.screenTop

```js
  <style>
        /* */
        body{
            height: 2000px;
        }

        a{
            position: fixed;
            bottom:50px;
            right: 50px;
            display: none;
        }
    </style>
</head>
<body>
<!-- -->
<a href=" " id="a">返回页面顶部</a>
<script>
    //
    //console.log(window.scrollTop);
    // 考虑兼容性 火狐想要获取:window.screenTop
    console.log(document.documentElement.scrollTop||window.screenTop);
    //滚动监听函数   scroll()
    window.onscroll=function () {
        //实时的获取 滚动条距离顶部的高度 
        console.log(document.documentElement.scrollTop||window.screenTop);
        if((document.documentElement.scrollTop||window.screenTop)>200){
            a.style.display="block";
        }else{
            a.style.display="none";
        }
    }
</script>
```

#### 定时器(周期性)

定义：让程序每间隔一段时间去反复一直执行。反复做一件事

##### 步骤

​	1、定义要做的事(创建一个函数，封装功能)

​	function f() {}

​	2、添加一个定时器  启动定时器跑起来

​	var timer=setInterval(执行的函数名，执行函数的间隔毫秒)

​	3、可选：停止定时器

​	clearInterval(timer);

​	timer=null;   释放内存

```js
<!-- -->
 <h1>倒计时:</h1>
<div id="d1">60</div>
<script>
    // 一般使用定时器 都需要等页面加载完成之后再去执行
    window.onload=function () { //页面完全加载完: css样式  img
        //1.定义一个 任务函数
        function test() {
            // 先拿到60
            d1.innerHTML--;
            if(d1.innerHTML<=0){
                // 3.清除定时器
                clearInterval(timer);
                timer=null;
                window.close();//关闭浏览器
            }
        }
        //2.启动定时器
        var timer=setInterval(test,100)
    }

</script>
```

#### 一次性定时器

​	定义：等待一段时间   去执行一次程序

​	语法：

​		1、定义任务函数

​			function f()  {}

​		2、启动一次性定时器

​			var timer=setTimeOut(任务函数，等待时间的毫秒数)

​		3、可以中途停止定时器

​			clearTimeOut(timer)

```js
 //1.定义任务函数
    alert("5秒之后弹出信息");
    function test() {
        alert("其实没啥好信息 ");
    }
    //2 执行
    var timer=setTimeout(test,5000);

    //3 :可选  可以终止
    btn.onclick=function () {
        alert("停止交易")
        clearTimeout(timer);
    }
```

#### history对象

​	定义：用来记录  浏览器当前访问过的网页(成功)

​	history.go(1)	前进一页	history.forword()

​	history.go(-1)	后退一页	history.back()

​	history.go(0)	刷新

#### location对象

​	定义：保存当前的url的相关信息

##### location对象属性

| 属性                                                         | 描述                                          |
| ------------------------------------------------------------ | --------------------------------------------- |
| [hash](https://www.w3school.com.cn/jsref/prop_loc_hash.asp)  | 设置或返回从井号 (#) 开始的 URL（锚）。       |
| [host](https://www.w3school.com.cn/jsref/prop_loc_host.asp)  | 设置或返回主机名和当前 URL 的端口号。         |
| [hostname](https://www.w3school.com.cn/jsref/prop_loc_hostname.asp) | 设置或返回当前 URL 的主机名。                 |
| [href](https://www.w3school.com.cn/jsref/prop_loc_href.asp)  | 设置或返回完整的 URL。                        |
| [pathname](https://www.w3school.com.cn/jsref/prop_loc_pathname.asp) | 设置或返回当前 URL 的路径部分。               |
| [port](https://www.w3school.com.cn/jsref/prop_loc_port.asp)  | 设置或返回当前 URL 的端口号。                 |
| [protocol](https://www.w3school.com.cn/jsref/prop_loc_protocol.asp) | 设置或返回当前 URL 的协议。                   |
| [search](https://www.w3school.com.cn/jsref/prop_loc_search.asp) | 设置或返回从问号 (?) 开始的 URL（查询部分）。 |

##### location对象方法

| 属性                                                         | 描述                     |
| ------------------------------------------------------------ | ------------------------ |
| [assign()](https://www.w3school.com.cn/jsref/met_loc_assign.asp) | 加载新的文档。           |
| [reload()](https://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。       |
| [replace()](https://www.w3school.com.cn/jsref/met_loc_replace.asp) | 用新的文档替换当前文档。 |

```js
	console.log(location);
	btn.onlick=function(){
        //  location.reload(); //刷新
        location.repalce("http://www.baidu.com"); // 当前文档被替换为新的文档
	}
```

#### navigator对象

​	定义：保存浏览器相关的信息

##### Navigator 对象属性

| 属性                                                         | 描述                                           |
| ------------------------------------------------------------ | ---------------------------------------------- |
| [appCodeName](https://www.w3school.com.cn/jsref/prop_nav_appcodename.asp) | 返回浏览器的代码名。                           |
| [appMinorVersion](https://www.w3school.com.cn/jsref/prop_nav_appminorversion.asp) | 返回浏览器的次级版本。                         |
| [appName](https://www.w3school.com.cn/jsref/prop_nav_appname.asp) | 返回浏览器的名称。                             |
| [appVersion](https://www.w3school.com.cn/jsref/prop_nav_appversion.asp) | 返回浏览器的平台和版本信息。                   |
| [browserLanguage](https://www.w3school.com.cn/jsref/prop_nav_browserlanguage.asp) | 返回当前浏览器的语言。                         |
| [cookieEnabled](https://www.w3school.com.cn/jsref/prop_nav_cookieenabled.asp) | 返回指明浏览器中是否启用 cookie 的布尔值。     |
| [cpuClass](https://www.w3school.com.cn/jsref/prop_nav_cpuclass.asp) | 返回浏览器系统的 CPU 等级。                    |
| [onLine](https://www.w3school.com.cn/jsref/prop_nav_online.asp) | 返回指明系统是否处于脱机模式的布尔值。         |
| [platform](https://www.w3school.com.cn/jsref/prop_nav_platform.asp) | 返回运行浏览器的操作系统平台。                 |
| [systemLanguage](https://www.w3school.com.cn/jsref/prop_nav_systemlanguage.asp) | 返回 OS 使用的默认语言。                       |
| [userAgent](https://www.w3school.com.cn/jsref/prop_nav_useragent.asp) | 返回由客户机发送服务器的 user-agent 头部的值。 |
| [userLanguage](https://www.w3school.com.cn/jsref/prop_nav_userlanguage.asp) | 返回 OS 的自然语言设置。                       |

##### **Navigator对象方法**

| 方法                                                         | 描述                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| [javaEnabled()](https://www.w3school.com.cn/jsref/met_nav_javaenabled.asp) | 规定浏览器是否启用 Java。                    |
| [taintEnabled()](https://www.w3school.com.cn/jsref/met_nav_taintenabled.asp) | 规定浏览器是否启用数据污点 (data tainting)。 |

```js
<script>
    //
    console.log(navigator)
    console.log(navigator.appCodeName);// 浏览器的代码名  "Mozilla"  兼容性考虑
    console.log(navigator.appName); // appName: "Netscape"
    //获取当前的网络的速度  2g ,3G 4G
    console.log(navigator.connection.effectiveType)

</script>
```

##### 模拟测试  不同的网速

![1608262440162](assets/1608262440162.png)

#### 事件绑定

​	1、可以在HTML中直接绑定

```js
<!-- 直接在html中 绑定事件-->
 <div onclick="abc()"></div>
```

​	2、在js中

​	xxx.onclick=function(){

​	this->当前的元素;

}

​	移出事件:  xxx.onclick=null;

##### 	问题:不能  同时绑定2个以上的事件

​	3、通过addEventListener方法实现绑定多个事件

​		xx.addEventLListener("事件名","方法函数")

​	移除事件：xx.addEventLListener("事件名","方法函数")

```js
btn.addEventListener("click",function () {// 参数1:事件名  参数2:函数体
        alert("执行了事件111")
    });
    
obj.removeEventListener("click",khbd);
```

```js
<!-- 直接在html中 绑定事件-->
 <div onclick="abc()">直接在html中 绑定事件</div>
<button id="d1">在Js中绑定</button>
<button id="btn">绑定多个事件</button>
<button id="stu">学习大招</button>
<button id="obj">绑定的对象</button>
<button id="fei">自废武功</button>
<script>
    //事件111
    d1.onclick=function () {
        alert("执行了方法1")
        //this=>当前点击的元素
    }
    //解除绑定
   // d1.onclick=null;
    //事件2
    d1.onclick=function () {
        alert("执行了方法22222")
    }
    //onxxx去绑定事件 不能同时绑定2个事件

    //解决
    btn.addEventListener("click",function () {// 参数1:事件名  参数2:函数体
        alert("执行了事件111")
    });
    btn.addEventListener("click",function () {// 参数1:事件名  参数2:函数体
        alert("执行了事件222")
    });
    // 测试: 给别人绑定事件
    stu.addEventListener("click",function () {// 参数1:事件名  参数2:函数体
        obj.addEventListener("click",function () {
           alert("辟邪剑谱");
       })
        obj.addEventListener("click",khbd);//事件   事件函数
    });
    function khbd() {
        alert("葵花宝典");
    }
    //移除事件绑定
    fei.addEventListener("click",function () {
        //移除指定的 事件函数
        obj.removeEventListener("click",khbd);
    })
</script>
```

#### 事件的三个阶段

​	1、捕获： 从最外层开始往里挨个去找  事件处理函数  并记录下来

​	2、触发执行  直接执行当前的目标元素对应的事件函数

​	3、冒泡  从里往外挨个去执行，之前记录的处理函数

##### 注意：事件的这三个阶段和什么方式绑定事件没有关系

##### 冒泡的好处：

​	减少事件监听的个数，事件绑定越多，越消耗内存，

##### 使用场景：

​	如果有多个元素，每个子元素都希望添加相同的事件时，可以直接给父元素绑定一次事件即可

​	利用冒泡的机制，每个子元素都实现事件的触发

##### 事件对象：e

​	1、事件触发就自动的创建(不需要人为的操作)

​	2、要使用得在事件处理函数中以第一个参数传入函数中

​	function(e){

​	e:事件对象  自动获取

}

##### 阻止冒泡：(默认都会有的)

​	不希望冒泡  可以处理

```js
e.stopPropagation();
```



##### 利用冒泡的问题：

​	当前触发的子元素  不再是通过this去指向，此时this指向的window(后面再说)；

​	通过**e.target**当前触发的元素   去替换掉this

```js
 <style>
        /* */
        div{
            border:1px solid #ccc;
            padding: 10px;
        }
    </style>
</head>
<body>
<!-- -->
<div id="parent">
    <div>111</div>
    <div>222</div>
    <div>333</div>
    <div>444</div>
    <div>555</div>
    <div>666</div>
</div>
<script>
    //1.找到所有的 子元素div
  /*  var divs=document.querySelectorAll("#parent div")
    //2.遍历所有的div  绑定单击事件
    // 有多少个子元素  就绑定了多少个事件
    for (var i=0;i<divs.length;i++){
        divs[i].onclick=function () {
            alert(this.innerHTML);
        }
    }*/

     // 利用冒泡=>一定会执行最外围的 处理函数

    //给parent 绑定事件
    parent.addEventListener("click",function (e) {
        //console.log(this);//=>window
        // alert(this.innerHTML);
        // e.target 当前的触发的子元素   =>this
        console.log(e.target.innerHTML);
    })
</script>
```

#### 8、语法

##### 1、选择器

​	基本的选择器(支持css中的所有的选择器)

```js
<script>
    //   原生的写法
      var d1=document.getElementById("d1");
       d1.style.color="red";

    //jq的写法   $语法
    $("#d1").css("color","yellow");
    //jq 支持所有的css中的 选择器
    //  类选择器  
    $(".d1").css("backgroundColor","blue");
    $("p,h1").css("fontSize","52px");

</script>
```

##### 2、基本筛选选择器

奇数行：even	偶数行：odd	下标：eq(x)	大于index的值:gt(index)	小于index的值:lt(x)

```js
//   :first 第一个
$(".parent div:first").css("color","red");
//   :not  除了
$(".parent div:not(:first)").css("color","yellow");
//   :even  奇数行
$(".parent div:even").css("background","yellow");
//  :odd  偶数行
$(".parent div:odd").css("background","pink");
// 下标也是从0开始的   当前下标是0
$(".parent div:eq(0)").css("background","blue");
//   下标大于index值 的所有元素
$(".parent div:gt(0)").css("fontSize","22px");
    //  小于 index 的值的 所有的元素
$(".parent div:lt(5)").css("border","1px solid #aaa");
```

##### 3、属性和内容筛选

内容筛选：contains("文本")	xxxx:empty()  匹配空元素	has(选择器) 匹配选择器	:parent 匹配当前的.parent 中的所有元素

属性选择器：'"[aa]  div[class!='a']       div[aa][title]	div[aa*=1] 匹配多个

```js
    <div class="a">dd2</div>
    <div aa="123" class="bbq" title="hh">dd3</div>
    <div aa="166" class="">dd4</div>
    <div  class=""></div>
    <p>我是个p</p>
</div>
<div class="parent">空空如也</div>
<script src="js/jquery.js"></script>
<script>
    //内容筛选
    //    :contains("文本")
    $(".parent p:contains('我')").css("color","red");
    // 匹配空元素
    $(".parent div:empty").css("border","20px solid #bbb");
    // has(选择器)  有对应选择器的 元素
    $(".parent:has(p) ").css("border","2px solid red");
    //  匹配 当前的.parent中 有子元素(包含文本)的所有的元素
    $(".parent:parent ").css("padding","10px");

    //属性选择器
    $("[aa]").css("color","blue");
    // 不等于
    $("div[class!='a']").css("fontSize","33px");
    // 匹配多个属性的写法
    $("div[aa][title]").css("fontSize",'14px')
    //  * 多个
    $("div[aa*='1']").css("border",'1px solid #aaa')

</script>
```

##### 4、表单类的选择器

```js
:input
:text
:password
:radio
:checkbox
:submit
:image
:reset
:button
:file
//状态类
:enabled	可用的
:disabled	被禁用
:checked	被勾选 
:selected	被选中
：focus     获取焦点
```

```js
<!-- -->
<input type="checkbox" checked>勾选
<input type="text" class="inp">
<script src="js/jquery.js"></script>
<script>
    // : 勾选中
    $("input:checked").css("display","none");
    //  jq中没有onclick这种写法
   /* $(".inp").onclick=function () {
        console.log("123")
    }*/
   //  单击事件可以直接写 不需要加onxxx
   $(".inp").click(function () {
      // $(".inp:focus").css("border","10px solid red")
       //当前点击的对象 this  不能直接这么写
       //this.css("border","10px solid red") 报错   this是js原生的当前的对象 css是jq的方法
       // jq的this $(this).jq中封装的方法
       $(this).css("border","10px solid red")

       this.style.border="10px solid red";// 可以实现
       //  js和 jq是可以混着写的  彼此之间没有冲突
   })
</script>
```

##### 5、jQ事件绑定

​	1、没有onclick这么写法

​	2、this=>$(this)

特点：

​	总结：原生的this不能使用jq 中的方法

​		jq中的this是可以使用原生的js的属性和方法

​			通过$(this)[0].xxx  就可以实现

​			原理：jq返回的this是一个装着当前元素的数组

例：$(this)[0].innerHTML   不会报错	this.html()  出现报错

```js
<button id="btn">点我</button>
<script src="js/jquery.js"></script>
<script>
    // on("事件名",回调函数)
    $("#btn").on('click',function () {
        console.log(123);
        //  html() ==innerHTML
        console.log($(this).html()); //ok
       // console.log(this.html()); //报错   原生this 使用Jq的方法
        console.log($(this));

        //  //jq this 使用原生的方法  可以实现
        // 原理是jq返回的this是一个装着当前元素的数组
        console.log($(this)[0].innerHTML);
    })
  
</script>
```

##### 6、元素访问

​	1、each(function (i){})  遍历每个元素执行回调函数  

​		i 对应每个元素的下标

​	2、index()  获取元素的下标

​		index("选择器")  获取指定元素的  下标0开始

​	3、.lenght  元素的个数  从1开始

​	4、get(i)    获取指定的下标的元素

```js
<!-- -->
<ul class="ul">
    <li>赵子龙</li>
    <li title="hu">赵子虎</li>
    <li title="hu">赵高</li>
    <li>赵匡寅</li>
    <li>赵本山</li>
</ul>
<button class="btn">添加</button>
<script src="js/jquery.js"></script>
<script>
    //
    $(".btn").click(function () {
        // each 遍历     i :每个元素的下标
        $("ul li").each(function (i) {
            console.log(i);//之前 for遍历的 那个 i  下标
           //this.className="red"+i;
            $(this)[0].className="red"+i;
        })
    })
    $("ul li").click(function () {
        //console.log($(this));
        //  index()
       // console.log($(this).index());// 获取下标
        //获取指定元素的下标 如果没有返回的是-1  找到了就返回对应的下标
        console.log($(this).index('[title="hu"]'));
        // 获取元素的个数
        console.log($("ul li").length); //

        // 获取指定的下标的元素
        console.log($("ul li").get(1))// 下标是1的元素
    })
</script>
```

##### 7、 属性操作(添加)

​	添加属性：xxx.attr("属性名","值")

​	获取属性：xxx.attr("属性名")

​	一口气可以添加多个属性  xx.attr({属性名:"值";属性名2:"值2"})

```js
 <style>
        /* */
        .red{
            background-color: red;
        }
    </style>
</head>
<body>
<!-- -->
<div class="d1">我是隔壁老徐</div>
<div class="d2" id="d2">我是隔壁老王</div>
<button class="btn">执行</button>
<script src="js/jquery.js"></script>
<script>
    //
    $(".btn").click(function () {
        //添加设置 属性
        $(".d1").attr("class","red").attr("title","年轻小伙").attr("xu",'19');
        //获取


        //通过传入一个对象的形式 进行多个属性的添加
        $("#d2").attr({   //以对象的形式
            // key : value的形式
            "class":"red",
            "title":"年轻小伙",
             xu:"19"  //对象中的属性名 可以省略 " "
        })
        //  查找元素的过程中 尽量的使用 id选择器
         console.log($(".d1").attr("class")); //undefined
        console.log($("#d2").attr("class")); //red
    })
      $(".d1").click(function () {
        //   console.log($(this).attr("class"));
      })
</script>
```

##### 8、删除属性

​	xx.removeAttr("属性名");

```js
 <style>
        /* */
        .bgc{
            background-color: red;
            cursor: pointer;
        }
    </style>
</head>
<body>
<!-- -->
<div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consequatur cum dolorum enim, illo incidunt, laudantium maiores molestiae non optio pariatur quaerat voluptate. Accusamus beatae cum dolores magnam quam!
</div>
<script src="js/jquery.js"></script>
<script>
    //   鼠标移入
    $("div").mouseover(function () {
        $(this).attr("class","bgc");
    })
    $("div").mouseout(function () {
        //  移出属性的操作
        $(this).removeAttr("class");
    })
</script>
```

##### 9、prop属性设置

​	一般设置bool类型的属性  比如  checked，disabled

```js
<!-- -->
<input type="checkbox">吃
<input type="checkbox">喝
<input type="checkbox">玩
<input type="checkbox">乐
<button id="btn">解除</button>
<script src="js/jquery.js"></script>
<script>

      //   默认第一个复选框 选中
      $("input:first").prop("checked","true");
      //除了第一个 其他禁用
      $("input:not(:first) ").prop("disabled","true");

      //移出
      $("#btn").click(function () {
          //移除
          // $("input:not(:first) ").prop("disabled","");
          $("input:disabled").removeProp("disabled");
      })

</script>
```

#### 查找、获取、添加

##### 1、data数据缓存

​	数据  用户是无法用肉眼看到的

```js
<!-- -->
<div>你看不到缓存的数据</div>
<button  class="add">添加数据到元素中  看不到</button>
<button  class="getData">显示添加的数据</button>
<button  class="removeData">删除添加的不可见的 缓存数据</button>

<script src="js/jquery.js"></script>
<script>
    // 添加
    $(".add").click(function () {
        //  绑定一个数据缓存
        $("div").data("xu","精神小伙");
    })
    //获取
    $(".getData").click(function () {
        console.log($("div").data("xu"));
        console.log($("div"));//存放在一个对象中 挂载在div中
    })
    //删除
    $(".removeData").click(function () {
        $("div").removeData("xu");
    })
```

#### 2、获取文本

​	1、html()   ===   xxx.innerHTML

​	2、text()    ===    

#### 增：

​	属性添加：添加属性 xx.attr("属性","值")  添加多个 xx.attr({属性名："值";属性名2："值2"})

​	prop属性设置：xx.prop("checkbox","true") 

​	css类的添加  xxx.addClass("类名")   添加类名  



​	文档操作(父子)

​	先找到父元素  ("xxx").append(div) //末尾追加	prepend  开头追加

​	先拿到新建的子元素，再追加到父元素中  (div).appendTo.("xxx")  //末尾追加  (div).prependTo // 开头追加

​	文档操作(兄弟)

​	先找到已经存在的元素 ("xxx").after(div)  //在元素之后追加  before  //在元素之前追加

​	先找 新元素    (div).insertBefore($("xxx"))	(div).insertAfter($("xxx"))

#### 删：

​	删除属性：xx.removeAttr("")   移除prop  removeProp("disabled")  

​	css类的删除  xx.removeClass("") 

​	元素的删除    ().empty(); 清空当前元素   ().remove("p")   清除的是当前指定的元素  ().detach("p") 会保留当前元素绑定的事件

#### 改：

​	xxx.toggleClass("类名") 如果没有就加上，有就删除

#### 查：

​	1、基本的选择器

​	2、基本的筛选选择器  even 奇数行  odd偶数行  eq(x)获取下标  gt(x) 大于下标的所有元素  lt(x) 小于x下标的元素

​	3、contains("文本")查找文本对应的元素 empty() 匹配空元素  

查属性：

​	xx.attr("xx") 查属性的值