KISSY.add('app/partials/header/index.tpl', function(S, Crox, $1) {

    var tmpl = 
'<div class="module" style="border-bottom: 1px solid #CCC; margin: 30px 10px;">\
    <span class="tip">app/partials/header/index.tpl</span>\
    <h2>让Crox与Kissy成为好基友<span style="color: red;">({{root.mode}})</span> {{include ./user/index.tpl}} </h2>\
</div>';

    tmpl = tmpl.replace(RegExp('{{include ./user/index.tpl}}', 'g'), $1.tmpl);

    return {
        tmpl: tmpl,
        fn: Crox.compile(tmpl)
    }
}, {
    requires: [
        'crox', './user/index.tpl'
    ]
});