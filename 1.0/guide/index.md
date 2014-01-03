## 综述

Crox是一个由JavaScript语言实现的高性能跨语言模板引擎.Crox模板可以直接在JavaScript环境中使用,也可以翻译成PHP,JSP等其他编程语言的可执行方法或翻译成Velocity,Smarty等其他模板引擎的源模板,Crox将保证翻译后的结果具备最佳执行效率.。

* 版本：1.0
* 作者：三冰，李牧，思霏，思竹
* demo：[http://gallery.kissyui.com/crox/1.0/demo/index.html](http://gallery.kissyui.com/crox/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/crox/1.0/index', function (S, Crox) {
         var tmpl = '{{CROX_TEMPLATE_HERE}}';

         var fn = Crox.compile(tmpl);

         var html = fn({
            a: 1,
            b: 2
         });

         console.log(html);
    })

## API说明

[http://thx.github.io/crox/](http://thx.github.io/crox/)