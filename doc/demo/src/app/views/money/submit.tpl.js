KISSY.add(function(S, require) {
    var Crox = require('crox');

    var tmpl = '有钱啦！可是，你应该也要把银行卡乖乖交给{{root.wife}}，悲剧啊！';


    var fn = Crox.compile(tmpl);
    fn.tmpl = tmpl;

    return fn;
});