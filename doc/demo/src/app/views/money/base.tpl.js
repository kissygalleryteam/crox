KISSY.add(function(S, require) {
    var Crox = require('crox');

    var tmpl = '你好 {{root.name}}\
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

    tmpl = tmpl.replace(RegExp('{{include ./submit.tpl}}', 'g'), require('./{{include ./submit.tpl}}.tpl').tmpl);


    var fn = Crox.compile(tmpl);
    fn.tmpl = tmpl;

    return fn;
});