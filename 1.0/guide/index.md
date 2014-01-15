## 综述

Crox是一个由JavaScript语言实现的高性能跨语言模板引擎。

Crox模板可以直接在JavaScript环境中使用，也可以翻译成PHP、JSP等其他编程语言的可执行方法，或翻译成Velocity、Smarty等其他模板引擎的源模板。

Crox将保证翻译后的结果具备最佳执行效率。

* 版本：1.0
* 作者：三冰，李牧，思竹，陆辉，思霏
* [Crox Demo](http://gallery.kissyui.com/crox/1.0/demo/index.html)
* [Crox-Kissy-Grunt Demo](http://gallery.kissyui.com/crox/1.0/demo/index-grunt.html)
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

- 取值： `{{root.prop}}` **注：取值可以root开始，也可以从set的局部变量开始**

- if选择：`{{#if root.ok}} 好 {{else}} 不好 {{/if}}`

- each遍历： `{{#each root.a 'var'}} {{var}} {{/each}}`  `{{#each root 'val' 'key'}} {{key}}=>{{val}} {{/each}}`

- set赋值： `{{set a = root.data.lilei.mother.phone.brand}}`

- include子模板导入： `{{include path/to/file.tpl}}`

更多语法说明请参见： [http://thx.github.io/crox/](http://thx.github.io/crox/)

## Crox API说明

Crox的所有接口都声明在 `Crox` 这个JS对象上的。目前，具体的接口包括：

- Crox.parse：解析Crox模板生成语法树AST

- Crox.render：将数据填充到Crox模板中，并生成渲染后的结果

- Crox.compile：将Crox模板编译成 `原生JS Function`

- Crox.compileToPhp：将Crox模板编译成 `PHP函数`

- Crox.compileToVM：将Crox模板翻译成 `Velocity模板`

更多API说明请参见 [http://thx.github.io/crox/](http://thx.github.io/crox/)

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

```js
function temp($i_root) {
// 为了篇幅，这里忽略一部分辅助方法 :-)
$t_r = '';
$i_ok = $i_root->ok;
$t_r .= ' ';
if($i_ok){
  $t_r .= ' 好 ';
}
else{
  $t_r .= ' 不好 ';
}
$t_r .= '
';
return $t_r;
}

```

### 使用Crox命令行工具

请先确保已通过 `npm install -g crox` 安装了crox命令行工具

#### 工具参数说明

命令行工具目前包含以下几个参数：

- `-p` | `--package-path` 设置待翻译Crox模板的根路径，默认是 `当前路径`

- `-e` | `--encoding` 设置Crox模板文件的编码方式，默认是 `utf-8`

- `--target-type` 翻译成的目标语言，比如：php|js等，默认是 `js`

- `--tpl-suffix` 模板文件后缀，默认是 `tpl`

- `-o` | `--output` 翻译后文件的目标文件夹，默认是 `当前路径`

#### 工具使用示例

假设：当前路径下的 `a.tpl` 文件中包含如下内容：

```html
{{set ok = root.ok}} {{#if ok}} 好 {{else}} 不好 {{/if}
```

在当前路径下，运行 `crox --target-type js`，Crox会将 `a.tpl`文件内容翻译成js Function，生成 `a.js` 文件，内容如下：

```js
function anonymous(root) {
var obj = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' };
    function $htmlEncode(s) {
        return String(s).replace(/[<>&"]/g, function(c) {
            return obj[c];
        });
    }var $s = '';function $print(s){ $s += s; } var ok=root.ok;
    $print(" ");
    if(ok){
        $print(" 好 ");
    }
    else{
        $print(" 不好 ");
    }
return $s;
}
```

同理，运行 `crox --target-type php`，将会翻译 `a.tpl` 并生成php文件 `a.php`。

## Crox-Kissy-Grunt插件

Crox是跨语言的模板引擎。

Crox支持子模板导入(include)，但是在前端环境下，并不能像php或velocity等后端语言或模板引擎那样，实时同步的拿到所导入的子文件内容。

在以KISSY为基础的前端环境中，KISSY所支持的模块加载机制，是在前端环境下实现Crox include机制的捷径。

为了更好的完成Crox到KISSY模块的翻译，将Crox include机制和KISSY模块加载机制对应起来，并保证发布后的Crox-Kissy模块的效率，我们为Crox开发了 `Crox-Kissy-Grunt插件`。

此插件在不同的使用场景时所做的具体工作如下：

- 开发时，Crox模板tpl被编译成一个Kissy模块，该模块保留原模板内容，并依赖Crox和其他子模板。[Demo](http://gallery.kissyui.com/crox/1.0/demo/demo/before.html)

- 发布时，Crox模板tpl被Crox.compile翻译成原生js Function，并被包装成Kissy模块（所有子模板依赖都将被替换）。该模块不依赖Crox，也不依赖子模块。 [Demo](http://gallery.kissyui.com/crox/1.0/demo/demo/after.html)

更多介绍，请移步：[http://gitlab.alibaba-inc.com/thx/crox-kissy](http://gitlab.alibaba-inc.com/thx/crox-kissy/tree/master)