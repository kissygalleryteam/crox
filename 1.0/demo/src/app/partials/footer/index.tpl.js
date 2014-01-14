KISSY.add('app/partials/footer/index.tpl', function(S, Crox) {

    var tmpl = 
'<div class="module" style="text-align: center; margin: 10px;">\
    <span class="tip">app/partials/footer/index.tpl</span>\
    Copy right @ {{root.corp}} {{root.year}}\
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