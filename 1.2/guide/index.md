## 综述

Crox是一个由JavaScript语言实现的高性能跨语言模板引擎。

Crox模板可以直接在JavaScript环境中使用，也可以翻译成PHP、JSP等其他编程语言的可执行方法，或翻译成Velocity、Smarty等其他模板引擎的源模板。

Crox将保证翻译后的结果具备最佳执行效率。

* 版本：1.2
* 作者：三冰，李牧，思竹，陆辉，思霏
* [Crox Demo](http://gallery.kissyui.com/crox/1.2/demo/index.html)
* [Kissy下使用Crox include的Demo](http://gallery.kissyui.com/crox/1.2/demo/index-grunt.html)
* [Crox的方案介绍](https://github.com/thx/crox/blob/master/docs/crox_design_overview.md)

## Crox 1.2 Changelogs

- 增加了Crox模板翻译成Velocity模板的功能，并完善了相关的Nodejs命令行工具

- 完善了include语法及其翻译

- 全面接入Kissy Gallary，同时利用Kissy的模块加载机制，更好的支持Crox模板翻译成Kissy模块时 include语法 的翻译

## 初始化组件

- 配置Kissy(Kissy 1.3.0+ 不需要编写此代码)

```js
KISSY.config({
    packages:[
        {
            name:"gallery",
            path:"http://a.tbcdn.cn/s/kissy/",
            charset:"utf-8"
        }
    ]
});
```

- 引用Crox

```js
KISSY.use('gallery/crox/1.2/index', function (S, Crox) {
     var tmpl = '{{root.a}} - {{root.b}}';

     // 编译成原生js Function
     var fn = Crox.compile(tmpl);

     var html = fn({
        a: 1,
        b: 2
     });

     console.log(html);  // 1 - 2
})
```

## Crox模板的基本语法

Crox 模板语法说明请参见： [http://thx.github.io/crox/apis/tpl-api/](http://thx.github.io/crox/apis/tpl-api/)

## Crox API说明

Crox API说明请参见 [http://thx.github.io/crox/apis/js-api/](http://thx.github.io/crox/apis/js-api/)

## 在Nodejs中使用Crox

Crox已经加入npmjs，Crox本身是一个nodejs模块，可被其他模块引用。

另外，Crox也提供命令行工具，可以很方便的将Crox模板转化成js文件或php文件。

 - 如果想引用Crox模块，可以用 `npm install crox` 命令，将Crox安装到nodejs中。

 - 如果同时想使用命令行工具，可以用 `npm install -g crox` (可能需要sudo) 命令，安装Crox模块，并生成Crox命令行工具。

Crox API列出的所有功能，在 Nodejs版本 中同样可用。

### 将Crox作为node模块引入

使用时，将 `crox` 模块 通过 `require` 引入即可使用。

```js
// 请先确保通过 npm install 已安装
var Crox = require('crox');

var tmpl = '{{set ok = root.ok}} {{#if ok}} 好 {{else}} 不好 {{/if}}';

// 将模板翻译成php
var php = Crox.compileToPhp(tmpl);

console.log(php);
```

用node运行这段JS，控制台输出是一段 `php` 代码，内容如下：

```php
<?php $crox_ok = $crox_root->ok;?> <?php if($crox_ok){?> 好 <?php }else{?> 不好 <?php }?>
```

### 使用Crox命令行工具

请先确保已通过 `npm install -g crox` 安装了crox命令行工具

工具的参数说明和使用示例请参见 [http://thx.github.io/crox/apis/nodejs-api/](http://thx.github.io/crox/apis/nodejs-api/)

## Kissy中Crox include的使用

Kissy中Crox以及Crox include的使用，请参见 [http://thx.github.io/crox/tutorials/for-kissy/](http://thx.github.io/crox/tutorials/for-kissy/)