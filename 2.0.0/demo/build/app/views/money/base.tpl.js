KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "你好 ";
        $s += KISSY.escapeHtml(root.name);
        $s += "\n\n你刚赢了 ￥";
        $s += KISSY.escapeHtml(root.money.value);
        $s += "\n\n";
        if (root.in_ca) {
            $s += "\n\n嗯，税后 ￥";
            $s += KISSY.escapeHtml(root.money.taxed_value);
            $s += "\n\n" +
                require('./submit.tpl')(root) +
                "\n\n";
        }
        return $s;
    };

});