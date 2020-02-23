# 外卖项目分析

## 1. 项目文件分类（只说最常用的src

* assets: 静态资源,比如 **js/css/小图片**
* components: 公用组件的地方（**注意区分路由组件**
* pages: 页面编写的地方(路由组件
* router: 配置路由的
* main.js （配置加载各种公共组件/UI库

### 多说一句：static是存储json/img的地方




## 2. iconfont/css预处理器的使用

### 2.1 iconfont

通过访问阿里的 [阿里](https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1646899)iconfont库可以获得你想要的svg矢量图



### 2.2 css预处理器(stylus)

```js
//安装
cnpm install stylus stylus-loader --save-dev
//使用样式
<style lang="stylus">
```

**stylus的语法类似于python,用缩进替代了花括号，并且可以不写分号和冒号**

例:

```stylus
#app
    color red
    background blue
//1.其中后代关系也可以用缩进表示
#app
    color red
    #app_child
        color green
//2.子代关系用‘>’

//3.函数的使用
Color()
    border arguments
//这里的arguments表示传进的参数可以是任意形式，比如带逗号/空格的字符串
#app
    Color(1px red solid)
//分割线:以上等于------------------------
#app {
    border 1px red solid
}
```

1.定义变量并赋值(建议用`$`作为变量前缀), 如`$`width=3px
2.函数参数可以写默认值,类似于es6的解构赋值, 如 padding(top=1px,right=2px)
3.方法名加() 为调用函数,如 border()
4.建议变量定义在最上面, 然后是函数, 然后才是代码. 最好的方式是变量和函数定义成单独的文件, 然后通过@import variable.styl 导入
**5.使用@height 会冒泡查找值, 如自身有此属性则获取该属性值; 否则层层向上查找该属性, 如果都没有则报错**
6.可以使用运算符进行计算
**7.z-index 1 unless @z-index 表示默认 z-index=1 除非 @z-index 存在** (结合第5点的冒泡查找)



**再说个循环和条件分支得了，以后大概率只用这些，太深入的不需要~~**

```stylus
//一个情景：ul下面有6个li标签,要求它们全部都是红色字体,且奇数的li边框是蓝色的，偶数li边框是红色的
Border(arg)
    border 1px arg solid

ul
    for row in 1 2 3 4 5 6
    :nth-child({row})
        color red
    if row%2 ==0
        :nth-child({row})
            Border(red)
    else
        :nth-child({row})
            Border(blue)
```

**还有运算符什么的，我个人感觉不太需要到，现用现查吧..**




## 3.vuex使用的坑:注册，视图渲染,mutations用法
### 3.1 注册
* 首先你要在src下创建一个store文件夹,然后在里面创建一个`store.js`
* 然后在`store.js`里面引入Vue/Vuex包,并把vuex绑定在vue上
* 创建变量`store`来接受对象(`new Vuex.Store({})`,记得export导出包
* 最后在`main.js`里面引入store,然后在实例中注册

### 3.2视图渲染的坑
**即：vuex数据更新后，插件中使用数据的地方没有更新**

解决方法：在模板中直接使用 $store.state.AdminInfo 这样就能随时拿到最新的状态值了

> 原因：页面加载前 Data 获取 store 里的值赋给自己，这样 Data 只有一初始值，后续vuex中状态发生改变，并不会再次赋值给 tableData ，除非页面刷新重新加载，组件生命周期重新开始，才能拿到最新的值

### 3.3 mutations传值用法
#### 提交载荷（Payload）
你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
``` js
mutations: {
  increment (state, n) {
    state.count += n
  }
}
//下面是在组件中的写法
store.commit('increment', 10)
```
在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：

```js
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})
```



## 4.图片src的问题(require模块)

**多说一句，这是个坑啊,assets文件夹下的资源都是会经过webpack打包处理的，因此里面的资源是会被当做模块引用，所以在js中的图片地址不能是一个简单的字符串，而要用require把图片当成一个包引用进来**

当然，static文件夹下的图片就不用(它不用webpack打包，不过它是**绝对路径**



## 5.vant库相关问题：

### 5.1.

底部栏自定义图片的时候 用`<img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />`vant给好的插槽进行运用,其中props是作用域插槽传来的值(父组件的值data)

### 5.2

如果觉得组件库里面的样式不合你意，可以自己创建一个全局样式，获取你要改的那个组件名，然后在全局样式里面覆盖即可



### 5.3

局部scroll的方法：核心思想就是脱离文档流，给定`margin-bottom`和`top`高度即可

``` css
#recommend {
  position: fixed;
  width: 100%;
  top: 300px;
  bottom: 0;
  margin-bottom: 50px;
  overflow: scroll;
}
```





## 6.发现几个好用的库:vuescroll/betterscroll

## 记得去看mutations的同步和异步操作
## 记录一下stylus的坑：子级元素的css必须在父级元素之下(雾...)
今天学了挺多的，特别是git，总算是进了git半个大门了
尝试一下快捷键
