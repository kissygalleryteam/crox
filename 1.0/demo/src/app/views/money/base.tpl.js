KISSY.add('app/views/money/base.tpl', function(S, Crox, $1) {

    var tmpl = 
'你好 {{root.name}}\
\
你刚赢了 ￥{{ root.money.value}}\
\
{{#if root.in_ca}}\
\
嗯，税后 ￥{{ root.money.taxed_value}}\
\
{{include ./submit.tpl}}\
\
{{/if}}';

    tmpl = tmpl.replace(RegExp('{{include ./submit.tpl}}', 'g'), $1.tmpl);

    return {
        tmpl: tmpl,
        fn: Crox.compile(tmpl)
    }
}, {
    requires: [
        'crox', './submit.tpl'
    ]
});