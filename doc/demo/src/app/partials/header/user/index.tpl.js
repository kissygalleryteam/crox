KISSY.add(function(S, require) {
    var Crox = require('crox');

    var tmpl = '<div class="module" style="float: right; font-size: 16px; margin-top: -10px; padding-top: 16px;">\
    <span class="tip">user.tpl</span>\
    用户：<a href="#nogo">{{root.username}}</a>\
</div>';


    var fn = Crox.compile(tmpl);
    fn.tmpl = tmpl;

    return fn;
});