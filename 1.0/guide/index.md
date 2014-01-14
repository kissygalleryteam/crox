## 综述

Crox是一个由JavaScript语言实现的高性能跨语言模板引擎。

Crox模板可以直接在JavaScript环境中使用，也可以翻译成PHP、JSP等其他编程语言的可执行方法，或翻译成Velocity、Smarty等其他模板引擎的源模板。

Crox将保证翻译后的结果具备最佳执行效率。

* 版本：1.0
* 作者：三冰，李牧，思竹，思霏
* demo：[http://gallery.kissyui.com/crox/1.0/demo/index.html](http://gallery.kissyui.com/crox/1.0/demo/index.html)

## 初始化组件

```js
S.use('gallery/crox/1.0/index', function (S, Crox) {
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

- include子模板导入： `{{include subs/a.tpl}}`

更多语法说明请参见： [http://thx.github.io/crox/](http://thx.github.io/crox/)

## Crox API说明

Crox的所有接口都声明在 `Crox` 这个JS对象上的。目前，具体的接口包括：

- Crox.parse：解析Crox模板生成语法树AST

- Crox.compile：将Crox模板编译成JS Function

- Crox.compileToPHP：将Crox模板编译成PHP函数

- Crox.compileToVM：将Crox模板翻译成Velocity模板

- Crox.render：将数据填充到Crox模板中，并生成渲染后的结果

更多API说明请参见 [http://thx.github.io/crox/](http://thx.github.io/crox/)

## Demo示例

### Crox模板

`app/views/money/base.tpl`

```html
你好 {{root.name}}

你刚赢了 ￥{{ root.money.value}}

{{#if root.in_ca}}

嗯，税后 ￥{{ root.money.taxed_value}}

{{include ./submit.tpl}}

{{/if}}
```

`app/views/money/submit.tpl`

```html

有钱啦！可是，你应该也要把银行卡乖乖交给{{root.wife}}，悲剧啊！

```

### Crox数据

```js
{
    "name": "思竹",
    "money": {
        "value": 10000,
        "taxed_value": 10000 - (10000 * 0.4)
    },
    "in_ca": true,
    "wife": "老婆大人"
}
```

### Crox-Kissy-Grunt生成的原生JS Function Kissy模块（以在Kissy下使用Crox为例）

Crox是前后端各种语言都通用的模板引擎，在JS端，如果采用Kissy进行开发，那么Crox-Kissy-Grunt将是你的得力助手。

具体介绍请参见：[http://gitlab.alibaba-inc.com/thx/crox-kissy](http://gitlab.alibaba-inc.com/thx/crox-kissy)

`app/views/money/base.tpl.js`

```js

KISSY.add('app/views/money/base.tpl', function(S) {

var croxFn = function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
    function $htmlEncode(s) {
        return String(s).replace(/[<>&"]/g, function(c) {
            return obj[c];
        });
    }var $s = '';function $print(s){ $s += s; } $print("你好 ");
    $print($htmlEncode(root.name));
    $print("你刚赢了 ￥");
    $print($htmlEncode(root.money.value));
    if(root.in_ca){
        $print("嗯，税后 ￥");
        $print($htmlEncode(root.money.taxed_value));
        $print("有钱啦！可是，你应该也要把银行卡乖乖交给");
        $print($htmlEncode(root.wife));
        $print("，悲剧啊！");
    }
return $s;
};

return {
    fn: croxFn
};

});
```

### Crox的JS调用

```
S.use('gallery/crox/1.0/index, app/views/money/base.tpl', function(S, Crox, Tmpl) {
    var html = Tmpl.fn({
        "name": "思竹",
        "money": {
            "value": 10000,
            "taxed_value": 10000 - (10000 * 0.4)
        },
        "in_ca": true,
        "wife": "老婆大人"
    });

    console.log(html);  //你好 思竹 你刚赢了 ￥10000 嗯，税后 ￥6000 有钱啦！可是，你应该也要把银行卡乖乖交给老婆大人，悲剧啊！ 
});
```