KISSY.add(function(S, require) {
    var Crox = require('crox');

    var tmpl = '<div class="module" style="margin: 30px 10px;">\
    <span class="tip">app/views/home/content.tpl</span>\
    <h3>Crox经典示例的Kissy再现</h3>\
    {{include "./classicdemo/index.tpl"}}\
</div>';

    tmpl = tmpl.replace(RegExp('{{include "./classicdemo/index.tpl"}}', 'g'), require('./classicdemo/index.tpl').tmpl);


    var fn = Crox.compile(tmpl);
    fn.tmpl = tmpl;

    return fn;
});