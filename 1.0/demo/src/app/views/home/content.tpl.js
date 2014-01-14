KISSY.add('app/views/home/content.tpl', function(S, Crox, $1) {

    var tmpl = 
'<div class="module" style="margin: 30px 10px;">\
    <span class="tip">app/views/home/content.tpl</span>\
    <h3>Crox经典示例的Kissy再现</h3>\
    {{include ./classicdemo/index.tpl}}\
</div>';

    tmpl = tmpl.replace(RegExp('{{include ./classicdemo/index.tpl}}', 'g'), $1.tmpl);

    return {
        tmpl: tmpl,
        fn: Crox.compile(tmpl)
    }
}, {
    requires: [
        'crox', './classicdemo/index.tpl'
    ]
});