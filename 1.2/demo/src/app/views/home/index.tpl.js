KISSY.add(function(S, require) {
    var Crox = require('crox');

    var tmpl = '<div class="module" style="margin: 20px auto; width: 980px;">\
    <span class="tip">app/views/home/index.tpl</span>\
\
{{include "../../partials/header/index.tpl"}}\
\
{{include "content.tpl"}}\
\
{{include "app/partials/footer/index.tpl"}}\
\
</div>';

    tmpl = tmpl.replace(RegExp('{{include "../../partials/header/index.tpl"}}', 'g'), require('../../partials/header/index.tpl').tmpl);
    tmpl = tmpl.replace(RegExp('{{include "content.tpl"}}', 'g'), require('./content.tpl').tmpl);
    tmpl = tmpl.replace(RegExp('{{include "app/partials/footer/index.tpl"}}', 'g'), require('app/partials/footer/index.tpl').tmpl);


    var fn = Crox.compile(tmpl);
    fn.tmpl = tmpl;

    return fn;
});