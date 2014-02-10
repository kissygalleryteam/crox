KISSY.add(function(S, require) {
    var Crox = require('crox');

    var tmpl = '<div class="module" style="text-align: center; margin: 10px;">\
    <span class="tip">app/partials/footer/index.tpl</span>\
    Copy right @ {{root.corp}} {{root.year}}\
</div>';


    var fn = Crox.compile(tmpl);
    fn.tmpl = tmpl;

    return fn;
});