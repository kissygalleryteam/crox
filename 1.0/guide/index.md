## 综述

Crox是一个由JavaScript语言实现的高性能跨语言模板引擎。

Crox模板可以直接在JavaScript环境中使用，也可以翻译成PHP、JSP等其他编程语言的可执行方法，或翻译成Velocity、Smarty等其他模板引擎的源模板。

Crox将保证翻译后的结果具备最佳执行效率。

* 版本：1.0
* 作者：三冰，李牧，思竹，思霏
* [Demo](http://gallery.kissyui.com/crox/1.0/demo/index.html)
* [Crox的方案介绍](https://github.com/thx/crox/blob/master/docs/crox_design_overview.md)

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
KISSY.use('gallery/crox/1.0/index', function (S, Crox) {
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

- 取值： `{{root.prop}}` **取值必须从root开始，不支持相对路径取值**

- if选择：`{{#if root.ok}} 好 {{else}} 不好 {{/if}}`

- each遍历： `{{#each root.a 'var'}} {{var}} {{/each}}`  `{{#each root 'val' 'key'}} {{key}}=>{{val}} {{/each}}`

- set赋值： `{{set a = root.data.lilei.mother.phone.brand}}`

- include子模板导入： `{{include path/to/file.tpl}}`

更多语法说明请参见： [http://thx.github.io/crox/](http://thx.github.io/crox/)

## Crox API说明

Crox的所有接口都声明在 `Crox` 这个JS对象上的。目前，具体的接口包括：

- Crox.parse：解析Crox模板生成语法树AST

- Crox.render：将数据填充到Crox模板中，并生成渲染后的结果

- Crox.compile：将Crox模板编译成JS Function

以上三个接口是 crox.js` 中包含的，以下两个接口，是 `crox-all.js` 中包含的

- Crox.compileToPHP：将Crox模板编译成PHP函数

- Crox.compileToVM：将Crox模板翻译成Velocity模板

更多API说明请参见 [http://thx.github.io/crox/](http://thx.github.io/crox/)

## Crox-Kissy-Grunt插件

Crox是前后端各种语言都通用的模板引擎，在JS端，如果采用Kissy进行开发，那么Crox-Kissy-Grunt将是你的得力助手。

具体介绍请参见：[http://gitlab.alibaba-inc.com/thx/crox-kissy](http://gitlab.alibaba-inc.com/thx/crox-kissy)