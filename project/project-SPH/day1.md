https://blog.csdn.net/weixin_43424325/article/details/121684101 笔记

http://39.98.123.211:8510/swagger-ui.html 后台接口

# day1

## 1：vue-cli 脚手架初始化项目。

node+webpack+淘宝镜像



node_module文件夹：项目依赖文件夹

public文件夹：一般放置一些静态资源(图片)，需要注意，放在public文件中的静态资源，webpack 进行打包的时候，会原封不懂打包到dist文件夹中。

src文件夹(程序员源代码文件夹)：

​	assets文件夹：一般也是放置静态资源(一般放置多个组件公用的静态资源)，需要注意，放置再assets文件加里面静态资源，在webpack打包的时候，webpack会吧静态资源当作一个模块，打包JS文件里面

​	components文件夹：一般放置的是非路由组件(全局组件)

​	App.vue:唯一的根组件，Vue当中的组件(.vue)

​	main.js:程序入口文件，也是整个程序当中最先执行的文件

​	babel.config.js：配置文件(babel相关)

package.json文件：认为项目‘身份证’，记录项目叫做什么，项目当中有哪些依赖、项目怎么运行。

package-lock.json:缓存性文件

README.md:说明性文件



## 2：项目的其他配置

### 2.1项目运行起来的时候，让浏览器自动打开

--pageage.json

```
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

### 2.2eslint校验功能关闭。

---在根目录下，创建一个vue.config.js
比如:声明变量但是没有使用eslint校验工具报错。

```
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
});
```

### 2.3src文件夹简写方法，配置别名。

jsconfig.json配置别名@提示【@代表的是src文件夹，这样将来文件过多，找的时候方便很多】

```
{
	"compileroptions": {
		"baseUrl": "./"",
		"paths": {
				“@/*":["src/*""]
				}
	"exclude":[node_modules", "dist"]
}
```



## 3:项目路由的分析vue-router

前端所谓路由:kv键值对。key: URL（地址栏中的路径)value:相应的路由组件注意:项目上中下结构
路由组件:
Home首页路由组件、Search路由组件、login登录路由、Refister注册路由非路由组件:
Header【首页、搜索页】
Footer【在首页、搜索页】，但是在登录|注册页面是没有



## 4、完成非路由组件Header与Footer业务

在咱们项目当中，不在以HTML +CSS为主，主要搞业务、逻辑在开发项目的时候:
1:书写静态页面（HTML + cSs)

2:拆分组件

3:获取服务器的数据动态展示4:完成相应的动态业务逻辑

注意1:创建组件的时候，组件结构+组件的样式＋图片资源

注意2:咱们项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader【安装五版本的】进行处理less，把less样式变为css样式，浏览器才可以识别。
注意3:如果想让组件识别less样式，需要在style标签的身上加上lang=less

### 4.1使用组件的步骤(非路由组件)

-创建或者定义

-引入

-注册

-使用



## 5 .路由组件的搭建vue-router

在上面分析的时候，路由组件应该有四个:Home、Search、Login、Register-components文件夹:经常放置的非路由组件(共用全局组件)
-pages|views文件夹:经常放置路由组件

### 5.1配置路由

项目当中配置的路由一般放置在router文件夹中

### 5.2总结

路由组件与非路由组件的区别?
1:路由组件一般放置在pages|views文件夹，非路由组件一般放置components文件夹中
2:路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字)，非路由组件在使用的时候，一般都是以标签的形式使用
3:注册完路由，不管路由路由组件、还是非路由组件身上都有$route、$router属性
$route:一般获取路由信息【路径、query、params等等】
$router:一般进行编程式导航进行路由跳转【push|replace】

### 5.3路由的跳转

路由的跳转有两种形式:
声明式导航router-link,可以进行路由的跳转编程式导航push|replace，可以进行路由跳转
编程式导航:声明式导航能做的，编程式导航都能在，
但是编程式导航除了可以进行路由跳转，还可以做一些其他的业务逻辑。



## 6.Footer组件显示与隐藏

显示或者隐藏组件: v-if|v-show
Footer组件:在Home、Search显示Footer组件Footer组件:在登录、注册时候隐藏的

### 6.1我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏。

### 6.2配置的路由的时候，可以给路由添加路由元信息【meta】，路由需要配置对象，它的key不能瞎写、胡写、乱写



## 8.路由传参

### 8.1:路由跳转有几种方式?

比如:A->B

声明式导航: router-link（务必要有to属性)，可以实现路由的跳转

编程式导航:利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。(可以书写一些自己业务)

### 8.2:路由传参，参数有几种写法?

params参数:属于路径当中的一部分，需要注意，在配置路由的时候，需要占位

query参数:不属于路径当中的一部分，类似于ajax中的queryString/home?k=v&kv=,不需要占位



## 9.路由传参相关面试题

第一种:字符串形式

this.$router.push( " /search/" + this.keyword+"?k="+this.keyword.toupperCase());

第二种:模板字符串
this.$router.push( /search/${this.keyword} ?k=$(this.keyword.toupperCase()})

第三种:对象
 this. $router.push({name : " search" ,params: {keyword:this.keyword} , query :{k:this.keyword.touppercase()} )

### 1:路由传递参数（对象写法）path是否可以结合params参数一起使用?

//答:路由跳转传参的时候，对象的写法可以是name、path形式，但是需要注意的是，path这种写法不能与params参数一起使用

this. $router.push({path: ' /seanch ' ,params: {keyword:this. keywond} ,query : {k:this. keyword.touppercase() }

### 2:如何指定params参数可传可不传?

//如果路由要求传递params参数，但是你就不传递params参数，发现一件事情，URL会有问题的
//如何指定params参数可以传递、或者不传递，在配置路由的时候，在占位的后面加上一个问号【params可以传递或者'search/:keyword?'】

 this.$router.push({name : ' search ' ,query :{k:this.keyword.toUppercase()});

### 3 : params参数可以传递也可以不传递，但是如果传递是空串，如何解决?

使用undefined解决: params参数可以传递、不传递（空的字符串)

// this.$router.push({name: ' seanch ' , params : {keyword: ""||undefined} ,query: {k:this.keyword.toUppercase()} )

### 4:路由组件能不能传递props数据?

可以的:**三种写法**

#### 布尔值写法: params 

props:true,

#### 对象写法:额外的给路由组件传递一些props

props:{a:1,b: 2},

#### 函数写法:可以params参数、query参数，通过props传递给路由组件

props : ($route)=>({keyword:$route.params. keyword, k:$route.query.k})



# day2

##   1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告错误?

--路由跳转有两种形式:声明式导航、编程式导航

--声明式导航没有这类问题的，因为vue-router底层已经处理好了

### 1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误那?"vue-router": “^3.5.3":最新的vue-router引入promise

### 1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。

### 1.3通过底部的代码，可以实现解决错误

this.$router.push({name: "search" , params:{(keyword:this.keyword}, query:{k:this.keyword.toupperCase())),O)=)0)=0);这种写法:治标不治本，将来在别的组件当中push/replace，编程式导航还是有类似错误。

### 1.4 this:当前组件实例(router)

this.$router属性:当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router $route属性

push: VueRouter类的一个实例

function VueRouter(){
}

//原型对象的方法
VueRouter.prototype.push = function(）{//函数的上下文为VueRouter类的一个实例}

let $router = new VueRouter();



## 2 : Home模块组件拆分

--先把静态页面完成

--拆分出静态组件

--获取服务器的数据进行展示

--动态业务



## 3:三级联动组件完成

---由于三级联动，在Home、Search、Detail，把三级联动注册为全局组件。

好处:只需要注册一次，就可以在项目任意地方使用



## 4:完成其余静态组件

HTML +css +图片资源



## 5:POSTMAN测试接口

--刚刚经过postman工具测试，接口是没有问题的

--如果服务器返回的数据code字段20日，代表服务器返回数据成功

--整个项目，接口前缀都有/api

## 6 : axios二次封装

XMLHttpRequest、 fetch、JQ、axios

6.1为什么需要进行二次封装axios?

请求拦截器、响应拦截器:请求拦截器，可以在发请求之前可以处理一些业务、响应拦截器，当服务器数据返回以后，可以处理一些事情

6.2在项目当中经常API文件夹【axios 】

接口当中:路径都带有/api

baseURL : " / api"

6.3有的同学axios基础不好，可以参考git|NPM关于axios文档



## 7:接口统一管理

项目很小:完全可以在组件的生命周期函数中发请求

项目大:axios.get ( 'xxx ')

7.1跨域问题Ⅰ

什么是跨域:协议、域名、端口号不同请求，称之为跨域http://localhost:8080/# /home 

----前端项目本地服务器http://39.98.123.211

----后台服务器

SONP、CROs、代理



## 8 : nprogress进度条的使用

start:进度条开始
done:进度条结束
进度条颜色可以修改的，当然需要修改人家的样式



## 9: vuex状态管理库

### 9.1vuex是什么?

vuex是官方提供一个插件，状态管理库，集中式管理项目中组件共用的数据。

切记，并不是全部项目都需要vuex，如果项目很小，完全不需要Vuex，如果项目很大，组件很多、数据很多，数据维护很费劲，Vuex

state

mutations

actions

getters

modules

### 9.2vuex基本使用

### 9.3vuex实现模块式开发

如果项目过大，组件过多，接口也很多，数据也很多,可以让Vuex实现模块式开发模拟state存储数据

modules:{

home:{},search:{}

}

## 10:完成TypeNav三级联动展示数据业务

[
	{
id:1,
name:'电子书"，child:[
{id: 2,name:"喜洋洋", child : []},
		]
	}

]