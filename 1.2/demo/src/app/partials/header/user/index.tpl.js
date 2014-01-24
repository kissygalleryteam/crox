KISSY.add('app/partials/header/user/index.tpl', function(S, Crox) {

    var tmpl = 
'<div class="module" style="float: right; font-size: 16px; margin-top: -10px; padding-top: 16px;">\
    <span class="tip">user.tpl</span>\
    用户：<a href="#nogo">{{root.username}}</a>\
</div>';

    

    return {
        tmpl: tmpl,
        fn: Crox.compile(tmpl)
    }
}, {
    requires: [
        'crox'
    ]
});