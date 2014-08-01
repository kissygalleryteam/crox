KISSY.add(function(S, require) {

    return function(root) {
        var $s = '';
        $s += "<div class=\"module\" style=\"margin-top: 30px; margin-left: 20px;\">\n    <span class=\"tip\">app/views/home/classicdemo/index.tpl</span>\n<pre style=\"margin-bottom: 0; font-size: 16px;\">\n    你好 ";
        $s += KISSY.escapeHtml(root.classic.name);
        $s += "<br>\n<br>\n    你刚赢了 ￥";
        $s += KISSY.escapeHtml(root.classic.value);
        $s += "<br>\n<br>\n";
        if (root.classic.in_ca) {
            $s += "\n    嗯，税后 ￥";
            $s += KISSY.escapeHtml(root.classic.taxed_value);
            $s += "<br>\n";
        }
        $s += "\n<br>\n</pre>\n</div>";
        return $s;
    };

});