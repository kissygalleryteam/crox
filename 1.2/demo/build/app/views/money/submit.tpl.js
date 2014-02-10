KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "有钱啦！可是，你应该也要把银行卡乖乖交给";
        $s += KISSY.escapeHtml(root.wife);
        $s += "，悲剧啊！";
        return $s;
    };

});