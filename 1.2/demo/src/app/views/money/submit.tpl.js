KISSY.add('app/views/money/submit.tpl', function(S, Crox) {

    var tmpl = 
'有钱啦！可是，你应该也要把银行卡乖乖交给{{root.wife}}，悲剧啊！';

    

    return {
        tmpl: tmpl,
        fn: Crox.compile(tmpl)
    }
}, {
    requires: [
        'crox'
    ]
});