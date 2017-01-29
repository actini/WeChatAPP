## 微信小程序开发技巧（持续更新ing）

### 框架部分

1. 所有页面都需要在 `app.json` 文件中注册在 `pages` 数组中，注册格式为：`"路径/文件名"`

> 注：文件名无需添加扩展名

2. `app.josn` 中的 `pages` 数组中的第一个页面为小程序的启动页

3. 每个页面的 `js`、`json`、`wxml`、`wxss` 可与所在目录名不同，但必须具有相同的路径和文件名

4. 页面目录可以嵌套，按照页面目录在 `app.json` 中注册即可

5. 可通过直接赋值的方法修改 `app.js` 中的全局变量，但修改页面变量需要使用 `Page.prototype.setData()` 方法，且赋值数据不能超过 1024 kB

6. 在文件中引入模块时，`require` 使用相对路径引入（绝对路径会报错）

7. 如需引入多级文件，则使用如下方式：
```
	// func.js 文件中定义了两个函数 fun1 和 fun2
	fun1 = function(){
		// code
	}

	fun2 = function(){
		// code
	}

	module.export = {
		fun1: fun1,
		fun2: fun2
	}

	// util.js 中定义了函数 util 并需要导入 func.js 文件
	var funcs = require('func.js文件的相对路径')

	util = function(){
		// code
	}

	module.export = {
		fun1: funcs.fun1,
		fun2: funcs.fun2,
		util: util
	}
```
8. 小程序的 `wxss` 中使用 `@import` 导入文件时应使用相对路径

9. 小程序中 `wxss` 样式的优先级为 内联样式 > 外链样式 > 全局样式

10. 小程序的 `wxss` 样式文件中支持 CSS3 的大部分属性，但选择器支持有限，请戳[官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html?t=20161222)

### 组件部分

1. `<block>` 仅为包装元素，接受属性控制且**不能嵌套**不会被渲染

2. `<text>` 组件内只能嵌套使用 `<text>` 组件，其他不可用

3. 仅 `<text>` 组件中的内容支持长按选中

4. `<picker>` 组件中的 `range` 数组下标必须连续且从 0 开始，否则会出现选项为 `null` 的情况

5. 组件名称均为小写，所有大写的组件名称都会在渲染时转换为小写

6. 任何自定义的组件 `<自定义名称>` 均会被当作 `<view>` 组件来渲染，但需要注意**组件名称中不能出现数字**。（虽然可以自定义语义化组件，但是由于微信官方并未加以说明，所以不推荐使用）

7. 使用 `page` 标签选择器可以修改顶层节点的样式，相当于 HTML 中的 `<body>` 元素

### API 部分

1. 程序中请求、上传、下载及 websocket 的请求地址必须为 https 地址，且在当前 APPID 的微信公众平台上注册合法域名

2. `wx.request()` 中发送 POST 请求时，需设置 `header` 如下：
	`{'content-type': 'application/x-www-form-urlencoded'}`

3. 某些情况下需要使用全局数据通常有两种方法：设置全局变量和写入缓存，区别在于全局变量的生存周期和小程序相同，而缓存则是永久储存的

4. `wx.login()` 只返回登陆 `code`，可向微信服务器发送此 `code` 获取用户的 `session_key` 和 `openid`，微信官方提供了登陆状态检验的接口和一套验证机制，请戳[官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161222#wxloginobject)

5. 小程序的本地缓存不能超过 10M

6. 小程序的上传和下载中只能获取文件的 `key`，开发者在服务器端通过 `key` 获取文件二进制内容。

7. 小程序中的 wx.upload API 方法无法并行调用，多张上传时需在 success() 函数中递归调用 wx.upload 方法。

```
function multiUpload(param, i=0){

    wx.hideToast()

    wx.showToast({
      title: "第"+(i+1)+"张图片上传中…",
      icon: "loading",
      duration: 10000,
      mask: true
    })

    wx.uploadFile({
      url: param.url,
      filePath: param.files[i],
      name: param.name,
      formData: param.formData,
      success: function(res){
        if(res.data.err){
            multiUpload(param, i)
        }else if(i < param.files.length-1){
            i++
            multiUpload(param, i)
        }else{
            wx.hideToast()
            if(param.success != undefined)
                param.success()
            return
        }
      },
      fail: function() {
        multiUpload(param, i)
      }
    })
}
```
> 详见[funcs.js](https://github.com/Romeo0906/WeChatAPP/blob/branch/QQZJ/utils/funcs.js)。

### 工具部分

1. 修改 `wxml` 和 `wxss` 文件将会刷新页面

2. 修改 `js` 和 `json` 文件将会重新编译小程序

3. 在 `app.json` 文件 `pages` 数组中添加目标页面，将会自动生成该页面目录和所需文件

4. 项目- 基础信息中设置勾选开发环境不校验请求安全域名以及 TLS 版本时，将可以使用 http 协议的请求地址，有助于本地调试

5. 可以在项目 - 配置信息中快捷查看当前 `appid` 配置的安全域名

6. 手机调试过程中可以点按右上角，选择 enable debug 打开手机调试模式

7. 项目 - 预览中可添加预览页面及参数信息，跳过繁琐的前戏直达你想要操作的位置

8. 快捷键
	
	格式调整
	```
	    Ctrl+S：保存文件

	    Ctrl+[， Ctrl+]：代码行缩进

	    Ctrl+Shift+[， Ctrl+Shift+]：折叠打开代码块

	    Ctrl+C Ctrl+V：复制粘贴，如果没有选中任何文字则复制粘贴一行

	    Shift+Alt+F：代码格式化

	    Alt+Up，Alt+Down：上下移动一行

	    Shift+Alt+Up，Shift+Alt+Down：向上向下复制一行

	    Ctrl+Shift+Enter：在当前行上方插入一行

	    Ctrl+Shift+F：全局搜索 
	```
	光标相关
	```
	    Ctrl+End：移动到文件结尾

	    Ctrl+Home：移动到文件开头

	    Ctrl+i：选中当前行

	    Shift+End：选择从光标到行尾

	    Shift+Home：选择从行首到光标处

	    Ctrl+Shift+L：选中所有匹配

	    Ctrl+D：选中匹配

	    Ctrl+U：光标回退 
	```
	界面相关
	```
	    Ctrl + \：隐藏侧边栏

	    Ctrl + m: 打开或者隐藏模拟器 
	```

### 概念部分

1. 小程序基于包开发，开发和发布流程与 H5 应用是截然不同的

2. 小程序中 Web 开发的 session 管理部分由微信服务器实现

3. 小程序的域名仅用于通讯和验证，没有 Cookie 机制

更信息请戳腾讯云布道师、TEDxZhuhai策展人[贺嘉](https://www.zhihu.com/people/he-jia-43/answers)老师关于小程序的知乎回答：[怎么看待 2017 微信公开课上张小龙对微信小程序的发言？](https://www.zhihu.com/question/54129120/answer/138024934)、[微信小程序（应用号）价值是什么？](https://www.zhihu.com/question/50875544/answer/133070413)