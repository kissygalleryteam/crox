KISSY.add('app/views/home/index.tpl', function(S, Crox, $1, $2, $3) {

    var tmpl = 
'<div class="module" style="margin: 20px auto; width: 980px;">\
    <span class="tip">app/views/home/index.tpl</span>\
\
{{include ../../partials/header/index.tpl}}\
\
{{include content.tpl}}\
\
{{include app/partials/footer/index.tpl}}\
\
</div>';

    tmpl = tmpl.replace(RegExp('{{include ../../partials/header/index.tpl}}', 'g'), $1.tmpl);
    tmpl = tmpl.replace(RegExp('{{include content.tpl}}', 'g'), $2.tmpl);
    tmpl = tmpl.replace(RegExp('{{include app/partials/footer/index.tpl}}', 'g'), $3.tmpl);

    return {
        tmpl: tmpl,
        fn: Crox.compile(tmpl)
    }
}, {
    requires: [
        'crox', '../../partials/header/index.tpl', './content.tpl', 'app/partials/footer/index.tpl'
    ]
});